import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 1.2rem 2.8rem;
  color: ${({ theme }) => theme.colors['--white']};
  font-weight: 700;
  background: ${({ theme }) => theme.colors['--yellow']};
  font-size: ${({ theme }) => theme.textSizes['--components-button-G']};
  border: none;
  border-radius: 6px;
  margin-top: 0.7rem;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['--yellow-dark']};
  }
`
