import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/102063081?v=4" alt="Avatar of user"/>
          <h1>Gabriel Rodrigues</h1>
          <h3>Username: </h3>
          <span>Rodrigues73233</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>3</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>3</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>3</span>
            </div>
          </div>
        </div>
        <div>Repositorios</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
