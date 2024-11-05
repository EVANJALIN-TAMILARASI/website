import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Pizza is a beloved dish with a long and delicious history! At its core, pizza is made of a flattened dough topped with ingredients like tomatoes, cheese, and various meats, vegetables, or herbs, then baked to perfection. Originating in Italy, especially in Naples, 
        pizza has a centuries-old heritage that spans much of the world, evolving to suit diverse tastes and culinary styles.Origins of Pizza:
        Pizza's roots trace back to ancient civilizations like Greece and Egypt, where people topped flatbreads with oil and seasonings. However, the modern pizza as we know it began in Naples in the 18th century. In the 19th century, the classic Margherita pizza—with mozzarella, tomatoes, and basil (representing the colors of the Italian flag)—was created, supposedly to honor Queen Margherita of Italy.
        </p>
      </div>
    </div>
  );
}

export default About;
