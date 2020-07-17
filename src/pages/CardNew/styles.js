import styled from "styled-components";
import { lighten, darken } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;
  max-width: 950px;

  main {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 545px;
      height: 300px;
      /* background: ${(props) => (props.color ? props.color : "#cddc39")}; */
      background: #cddc39;
      padding: 16px 28px;
      border: 3px solid #546e7a;
      border-radius: 10px;

      strong[name="name"] {
        width: 100%;
        text-align: right;
        font-size: 24px;
      }

      img[name="chipCard"] {
        height: 60px;
        margin-top: 10px;
      }

      .block1 {
        display: flex;
        flex-direction: column;
        width: 300px;

        span {
          text-align: right;
          margin-right: 9px;
          font-size: 14px;
        }
        strong {
          width: 100%;
          font-size: 28px;
        }
      }

      .block2 {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .block2-1 {
          display: flex;
          flex-direction: column;

          span {
            font-size: 14px;
          }
          strong {
            width: 100%;
            font-size: 28px;
          }
        }

        .block2-2 {
          display: flex;
          flex-direction: column;
          width: 200px;

          span {
            width: 150px;
            font-size: 14px;
          }
          strong {
            width: 100%;
            font-size: 28px;
          }
        }

        img {
          height: 60px;
        }
      }
    }

    .card-form {
      width: 390px;
      background: #cddc39;
      padding: 10px 16px;
      border: 3px solid #546e7a;
      border-radius: 10px;

      form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .block0 {
          display: flex;
          flex-direction: column;
        }

        .block1 {
          display: flex;

          input,
          .block2-1,
          .block2-2 {
            width: 170px;
          }
        }

        .block2 {
          display: flex;
          justify-content: space-between;

          input,
          .block2-1,
          .block2-2 {
            width: 170px;
          }
          
          .block2-1{
            .css-2b097c-container{
              padding: 0;
              margin: 0;
              height: 30px;
              border-radius: 0;

              .react-select__control, .css-yk16xz-control{
                border: 2px solid #fff;
                border-radius: 0;
                display: flex;
                align-items: flex-start;
                padding: 0;
                margin: 0;
                background: #546e7a;
                min-height: 30px;
                height: 30px;
                /* height: 100%; */
                /* border: 2px solid #fff; */
                
                .react-select__indicators, .css-1hb7zxy-IndicatorsConatiner{
                  /* border: 1px solid yellow; */
                  /* display: flex;
                  align-items: flex-start; */
                  /* padding: 0px 8px; */
                  margin: 0;
                  height: 28px;
                  width: 37px; 

                    .react-select__indicator, .react-select__dropdown-indicator, .css-tlfecz-indicatorContainer{
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      padding: 0;
                      width: 100%;
                      height: 28px;
                      /* border-radius: 4px; */

                      :hover{
                        cursor: pointer;
                        background: ${lighten(0.05, "#546e7a")}

                      }

                      svg{
                        color: #fff;
                      }
                    }
                  
                }

                .react-select__value-container, .css-g1d714-ValueContainer{
                  
                  /* border: 1px solid yellow; */
                  /* display: flex;
                  align-items: flex-start; */
                  padding: 0px 8px;
                  margin: 0;
                  height: 28px;

                  .react-select__single-value, .css-luccc91-singleValue{
                    color: #fff;
                  }
                  
                  

                  .css-b8ldur-Input{
                    /* display: flex;
                    align-items: flex-start; */
                    margin: 0;
                    padding: 0;
                    color: #fff;

                    .react-select__input{
                    /* border: 1px solid red; */
                    /* display: flex;
                    align-items: flex-start; */
                    height: 26px;
                    }
                  }

                  .react-select__placeholder{
                    color: #fff;
                  }         
                }
              }
            }
          }
        }

        .block3 {
          display: flex;
          justify-content: space-between;

          input,
          .block3-1,
          .block3-2 {
            width: 170px;
          }
        }

        input {
          background: #546e7a;
          height: 30px;
          padding: 0 0 0 10px;
          border: 2px solid #fff;
          color: #fff;

          ::placeholder {
            color: #fff;
          }
        }

        img {
          height: 50px;
        }

        .block4 {
          display: flex;
          justify-content: space-between;

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #546e7a;
            border: 2px solid #fff;
            height: 35px;
            width: 170px;
            color: #fff;
            transition: background 0.2s;

            :hover {
              background: ${darken(0.1, "#546e7a")};
            }

            img {
              height: 20px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
`;

// export const Select = styled.select``;
