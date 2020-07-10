import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #24292e;
`

const Title = styled.h3`
  margin: 15px;
  padding: 10px;
  color: #fff;
  background-color: #20232a;
  border-radius: 7px;
`

const Clone = styled.div`
  margin: 10px 0;
`

const Code = styled.code`
  background-color: #24292e;
  color: #fff;
  border-radius: 3px;
  padding: 5px;
`

const Homepage = styled.a`
  color: #20232a;

  &:hover {
    color: #4d92d6;
  }
`

const Date = styled.div`
  font-size: 12px;
  margin-top: 15px;
  padding-top: 5px;
  text-align: right;
  border-top: 1px solid #20232a;
`

export { Container, Title, Date, Clone, Code, Homepage }
