import styled from "styled-components";

export const TrustedByStyle = styled.section`
  background: white;
  border-radius: 16px;
  padding: 60px 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
  }
  
  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 60px;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      border-radius: 2px;
    }
  }
  
  .parent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 40px;
    justify-content: center;
    align-items: start;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
  
  .child {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    border-radius: 12px;
    background: #f8fafc;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &:hover {
      transform: translateY(-8px);
      background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
      box-shadow: 0 12px 20px rgba(59, 130, 246, 0.1);
      
      &::before {
        opacity: 1;
      }
      
      svg {
        transform: scale(1.1);
        color: #3bf0f6ff;
      }
      
      .numbers {
        color: #1eaf75ff;
        transform: scale(1.05);
      }
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }
    
    svg {
      margin-bottom: 20px;
      color: #475569;
      transition: all 0.3s ease;
    }
    
    .numbers {
      font-size: 2.5rem;
      font-weight: 800;
      color: #1e293b;
      margin-bottom: 5px;
      transition: all 0.3s ease;
      background: linear-gradient(90deg, #1e40af, #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .details {
      font-size: 1.1rem;
      font-weight: 600;
      color: #475569;
      margin-top: 5px;
    }
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    padding: 40px 20px;
    
    h1 {
      font-size: 2.2rem;
      margin-bottom: 40px;
    }
    
    .child {
      padding: 25px 15px;
      
      .numbers {
        font-size: 2.2rem;
      }
      
      .details {
        font-size: 1rem;
      }
    }
  }
  
  @media (max-width: 480px) {
    padding: 30px 15px;
    
    h1 {
      font-size: 1.8rem;
    }
    
    .child {
      .numbers {
        font-size: 2rem;
      }
    }
  }
`;