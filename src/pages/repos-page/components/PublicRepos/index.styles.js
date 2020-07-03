import styled from 'styled-components'

const RepoSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RepoInput = styled.input`
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 5px 10px;
`
const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: 14px;
  color: #4d92d6;
  margin: 5px 0 10px 0;
`

const Checkbox = styled.input`
  width: 17px;
  color: #4d92d6;
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    min-width: 100%;
  }

  @media screen and (max-width: 1100px) {
    min-width: 80%;
    justify-content: center;
  }
`

const RepoBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  word-wrap: break-word;
  width: 21%;
  min-width: 250px;
  margin: 15px;
  padding: 5px;

  @media screen and (max-width: 600px) {
    min-width: 70%;
  }

  @media screen and (max-width: 1100px) {
    min-width: 40%;
  }
`

const RepoName = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: #24292e;

  &:hover {
    color: #4d92d6;
  }
`

const Language = styled.div`
  color: #666666;
  font-size: 12px;
  margin-top: 5px;
`

const Stars = styled.div`
  color: #4d92d6;
`

export {
  RepoSearch,
  RepoInput,
  CheckboxLabel,
  Checkbox,
  Container,
  Grid,
  RepoName,
  Language,
  Stars,
  RepoBox,
}
