import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 643px;
    height: 38px;
    margin-left: 20px;
    margin-top: 3px;
    

    background:#f9f9f9;
`
export const CircleDetails = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border:1px solid #F9F9F9;
    background: ${(props) => props.color};
    //background: linear-gradient(89.96deg, #622EE5 0.06%, #172765 99.94%);

    text-align:center;
    padding:10px;            
`
export const Text = styled.text`
    text-align:center;
    font-weight:bold;
    color:#fff;
    font-size:14px;
    padding-top:50px;
    

`
export const Wrapper = styled.div`
    position:absolute;
    background:#F9F9F9;
    width:1317px;
    height:44px;
    left:42px;
    top:70px;
    margin-left:6px;
    box-shadow:4px 4px 4px 4px rgba(0,0,0,0.25);
    box-shadow:4px 4px 4px 4px rgba(0,0,0,0.25);
`
export const Circle = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 19px;
    border:1px solid #F9F9F9;
    //background: ${(props) => props.color};
    background:linear-gradient(0.6turn, #ffffff, #efeeed, #e5e4e2);

    text-align:center;
    justify-content:center;
    align-content:center;
    padding:5px;
    margin-left:20px;

`
export const Description = styled.text`
    font-size:14px;
    color:#172765;
    padding-right:5px;
    padding-left:10px;
`
export const Value = styled.text`
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color:#69D531;
    padding-left:10px;
    padding-top:10px;
`
export const Content = styled.div`
    display:flex;
    flex-direction:row;
    padding-left:40px;
`
