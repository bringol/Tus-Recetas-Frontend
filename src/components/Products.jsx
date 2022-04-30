import React, {useState} from "react";
import {AiFillStar} from "react-icons/ai";
import { GiStoneCrafting } from "react-icons/gi";
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";


export default function Products() {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const data = [
    {
      image: product1,
      name: "Hamburguesa",
    },
    {
      image: product2,
      name: "Tostado",
    },
    {
      image: product3,
      name: "Huevos",
    },
    {
      image: product4,
      name: "Torta",
    },
  ];
  return (
    <Section id="recetas">
      <div className="title">
        <h1>
          <span>Recetas</span>
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>

              <div className="raiting">
                {[... Array(5)].map((star, i) => { 
                  const ratingValue = i + 1;

                  return (
                    <label>
                      <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={()=> setRating(ratingValue)}
                    
                      />
                      <AiFillStar className="star"
                       color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" } 
                       size={30}
                       onMouseEnter={()=> setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                       />

                      </label>
                  );
                })}
              </div>
              <button>Ver más</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #44214e;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #572e57, #834e6d, #572e57);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #572e57, #834e6d, #572e57);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
