import React from "react";
import styled from "styled-components";

const AlertCard = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <StyledWrapper>
      <div
        className="error md:ml-[37rem] md:mt-[.5rem]
      ml-[3.5rem] mt-1"
      >
        <div className="error__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            viewBox="0 0 24 24"
            height={24}
            fill="none"
          >
            <path
              fill="#393a37"
              d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
            />
          </svg>
        </div>
        <div className="error__title">
          Login to find players in your location
        </div>
        <div className="error__close">
          <svg
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            viewBox="0 0 20 20"
            height={20}
          >
            <path
              fill="#393a37"
              d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .error {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    width: 320px;
    padding: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    background: #ef665b;
    border-radius: 8px;
    box-shadow: 0px 0px 5px -3px #111;
  }

  .error__icon {
    width: 20px;
    height: 20px;
    transform: translateY(-2px);
    margin-right: 8px;
  }

  .error__icon path {
    fill: #fff;
  }

  .error__title {
    font-weight: 500;
    font-size: 14px;
    color: #fff;
  }

  .error__close {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: auto;
  }

  .error__close path {
    fill: #fff;
  }
`;

export default AlertCard;