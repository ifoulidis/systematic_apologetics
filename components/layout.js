function Layout(props){
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
      body {
        background: ${isDark ? "rgb(40, 40, 40)" : "whitesmoke"};
      }
      footer{
        background: ${isDark ? "black" : "white"};
        color: ${isDark ? "white" : "black"};
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        padding: 2em;
        margin: 0;
      }
      nav{
        background: ${isDark ? "black" : "aliceblue"};
        color: ${isDark ? "white" : "black"};
      }
      .MainContentContainer p{
        color: ${isDark ? "white" : "black"};
      }
      .articleTitle{
        color: ${isDark ? "white" : "black"};
      }
      h5{
        color: ${isDark ? "white" : "black"};
      }
      .themebtn{
        font-family: 'Literata', Garamond;
        font-style: bold;
        padding: 0.5em;
        font-size: inherit;
        color: inherit;
        background-color: inherit;
        border-radius: 0.5em;
        border-width: 0.1em;
        border-color: ${isDark ? "white" : "black"};
      }
    `}</style>
    </div>
  )
}