import { styled } from "styled-components"

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 172px;
`

export const Background = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  top: -10px;
  z-index: -1;
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const TagText = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;

  text-align: center;

  color: #111111;
`

export const Title = styled.h1`
  margin-top: 12px;
  margin-bottom: 16px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  /* identical to box height, or 77px */

  text-align: center;

  color: #111111;
`

export const Subtitle = styled.h2`
  max-width: 480px;
  text-align: center;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */

  text-align: center;

  color: rgba(17, 17, 17, 0.6);
`
