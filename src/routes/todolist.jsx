import React from "react";
import { Link, useParams } from "react-router-dom";
function Todolist() {
  const { todosId } = useParams();
  return (
    <>
      <Link to="/todos">
        <h1>Item #{todosId}</h1>
      </Link>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
        tristique nisl. Etiam accumsan ante sem. Praesent dignissim, leo et
        molestie bibendum, dui metus mollis urna, ut dapibus velit nulla vitae
        felis. Maecenas et justo in magna accumsan sagittis. Proin pretium
        maximus ullamcorper. Aenean orci ligula, interdum a euismod in, sagittis
        ut enim. Mauris condimentum euismod arcu, ut dapibus mauris auctor
        placerat. Etiam feugiat dapibus nibh sed dapibus. Sed finibus malesuada
        iaculis. Ut ut urna eget quam varius tincidunt. Donec id nunc vitae
        metus aliquam vulputate a id massa. Nulla nisi mauris, venenatis non
        odio nec, vulputate suscipit ex. Nunc molestie velit quis sapien varius,
        vel tempor ipsum commodo. Praesent et tellus ac risus vulputate eleifend
        non eget nisl. Sed vitae pulvinar felis. Sed non tempus lectus. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Sed tempor dui vitae
        est congue, et facilisis quam posuere. Morbi sit amet elit nec mi
        gravida ullamcorper rutrum quis lacus. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Quisque
        nulla diam, eleifend a augue a, imperdiet pellentesque ex. In fringilla
        enim ut nunc faucibus scelerisque. Nam elit dolor, vestibulum sed velit
        ut, ultricies commodo dolor. Nulla turpis felis, maximus vel hendrerit
        ut, ornare ac mi. Morbi auctor feugiat gravida. Donec faucibus ex eu
        accumsan efficitur.
      </div>
    </>
  );
}

export default Todolist;
