import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormItem = styled(Link)`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: black;
  text-decoration: none;

  :hover {
    /* background-color: rgba(0, 0, 0, 0.07); */
    border-color: #167ef9;

    svg {
      opacity: 1;
    }
  }

  div {
    display: flex;
    align-items: center;

    svg {
      color: white;
      margin-left: 0.6rem;
      cursor: pointer;
      height: 1.9rem;
      width: 1.9rem;
      padding: 0.4rem;
      border-radius: 0.3rem;
      opacity: 0;
      z-index: 10;

      :hover {
        transform: scale(1.1);
      }
    }

    svg.link {
      background-color: #4ac6d7;
    }

    svg.duplicate {
      background-color: #994ad7;
    }

    svg.view {
      background-color: #32cb94;
    }

    svg.edit {
      background-color: #438eff;
    }

    svg.delete {
      background-color: #ff3737;
    }
  }
`;
