import styled from 'styled-components';

export const Container = styled.div`

  .our-team {
  padding: 30px 0 40px;
  height: 350px;
  margin-bottom: 30px;
  background-color: #DFE3DD;
  text-align: center;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  border: 1px solid #31081F;
}

.our-team .picture {
  display: inline-block;
  height: 130px;
  width: 130px;
  margin-bottom: 50px;
  z-index: 1;
  position: relative;
}

.our-team .picture::before {
  content: "";
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: #31081F;
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 0.9;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}

.our-team:hover .picture::before {
  height: 100%;
}

.our-team .picture::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #31081F;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.our-team .picture img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
}

.our-team:hover .picture img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
}

.our-team .title {
  display: inline-block;
  font-size: 15px;
  color: #4e5052;
  text-transform: capitalize;
  margin: 0 5px;
}

.our-team .social {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #31081F;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;
}

.our-team:hover .social {
  bottom: 0;
}

.our-team .social li {
  display: inline-block;
  margin: 0 10px;
}

.our-team .social li button {
  display: block;
  width: 60px;
  padding: 10px;
  font-size: 17px;
  color: #31081F;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  border: 1px solid #31081F;
  border-radius: 5px;
}

.our-team .social li button:hover {
  color: #f7f5ec;
  background-color: #31081F;
  border: 1px solid #f7f5ec
}

.team-content {
  padding: 13px;
}
`;
