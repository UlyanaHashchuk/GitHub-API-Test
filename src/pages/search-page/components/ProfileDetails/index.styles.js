import styled from 'styled-components'

const Profile = styled.div`
  display: flex;
  margin: 15px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  @media screen and (max-width: 600px) {
    align-items: center;
    justify-content: center;
    margin: 10px 0 0 0;
  }
`

const Image = styled.img`
  width: 200px;
  border-radius: 50%;
`

const Name = styled.div`
  font-size: 26px;
  color: #24292e;
`

const Bio = styled.div`
  font-size: 14px;
  text-align: center;
  color: #666666;
  margin-bottom: 20px;
`

const RepoInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #24292e;
  font-size: 18px;

  &:hover {
    color: #4d92d6;
  }
`

const RepoTitle = styled.div`
  font-size: 13px;
`

export { Profile, Image, Info, Name, Bio, RepoInfo, RepoTitle }
