import React, { useEffect, useState } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeriesCanvas,
  LabelSeries,
} from 'react-vis';
import api from '../../services/api';

const Statistics = () => {
  const [answers, setAnswers] = useState([]);
  const [size, setSize] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/same_form/1')
      .then((res) => {
        const jsonAnswer = res.data.map((answer) => ({
          id: answer.id,
          title: JSON.parse(answer.answers).hash.title,
          answers: JSON.parse(answer.answers).hash.questions,
        }));
        setSize(res.data.length);
        setAnswers(jsonAnswer);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const Graphic = (formAnswers, answerSize) => {
    formAnswers.forEach((formAnswer) => {
      formAnswer.answers.forEach((question) => {
        if (question.type === 'checkbox') {
          console.log(question.type);
          const data = [
            { x: 0, y: 8 },
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
            { x: 7, y: 3 },
            { x: 8, y: 2 },
            { x: 9, y: 0 },
          ];
          console.log(answerSize);
        }
      });
    });
  };
  const BarSeries = VerticalBarSeriesCanvas;
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];
  const labelData = data.map((d, idx) => ({
    x: d.x,
    y: Math.max(data[idx].y),
  }));
  if (loading === false) console.log('aqui', answers);
  return (
    <div className="App">
      {loading ? (
        <p> Carregando </p>
      ) : (
        <>
          <XYPlot height={400} width={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <BarSeries data={data} />
            <LabelSeries data={labelData} />
          </XYPlot>
          <button type="button" onClick={() => Graphic(answers, size)}>
            Gráfico
          </button>
        </>
      )}
    </div>
  );
};

export default Statistics;
