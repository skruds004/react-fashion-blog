import Header from './Header';
import Article from './Article';
import Footer from './Footer';

function App() {
  const articles = [{
    date: "11/12/20",
    title: "On the Street in Brooklyn",
    image: "https://www.marthastewart.com/thmb/9SwNGFbxZv2ttLQ3uvZe_McJChk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j",
    alt: "Pancake in Brooklyn",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem doloribus fuga reprehenderit adipisci nemo? Quo, quia eligendi cum debitis, quidem repudiandae impedit sint, itaque quis soluta facilis hic iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ea ad nulla quisquam iste. Aliquid adipisci, odit amet quis eius sint? Doloribus et pariatur repellendus placeat itaque rerum iste unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores sapiente enim! Voluptatibus dolor minus est ducimus voluptate. Laudantium distinctio ad blanditiis ex facilis inventore quis reprehenderit esse voluptatibus dolores!"
  },{
    date: "11/11/20",
    title: "Vintage in Vogue",
    image: "https://www.marthastewart.com/thmb/9SwNGFbxZv2ttLQ3uvZe_McJChk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j",
    alt: "Pancakes in Vogue",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, porro temporibus doloremque odio distinctio cum suscipit blanditiis ullam reiciendis ducimus dicta? Neque, qui. Id sit vitae alias porro neque expedita! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione optio est nam autem, officia hic quis eos veritatis odit atque a, non rerum sed laboriosam. Quis est voluptate sint! Ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure impedit possimus sequi dolores vitae quaerat est minus ullam nisi velit voluptate accusamus tempora molestiae adipisci aut, delectus numquam unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam ipsa atque amet, delectus repellat blanditiis qui fuga, recusandae incidunt ea sint reprehenderit sequi. Cupiditate facilis quos a eaque incidunt!"
  }];
  return (
    <div className="App">
      <Header />
      <Article 
        articles={articles}
      />
      <Footer />
    </div>
  );
}

export default App;
