import './style.css';

const React = require("react");
const marked = require("marked")

marked.setOptions({
  breaks: true
});


class Editor extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={}
  }
  render(){
    return(
      <div className="">
        <textarea id="editor" onChange={this.props.change} value={this.props.markdown}>

        </textarea>
      </div>
    )
  }
}

class Preview extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={}
  }
  render()
  {
    return(
      <div className="" id="preview" dangerouslySetInnerHTML={{__html:marked(this.props.markdown)}}>
      </div>
    )
  }
}

class Header extends React.Component{
  constructor(props)
    {
        super(props)
        this.state={}
    }
    render(){
        return(
        <div className="header">
            <div className="left">
                <i className="fab fa-free-code-camp"></i>
                <span id="">{this.props.header_name}</span>
            </div>
            <div className="right">
                <i className={this.props.icon_name} onClick={this.props.click}></i>
            </div>
        </div>
        )
    }
}


class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      editor_minimise:true,
      preview_minimise:true,
      markdown:placeholder
    }
  }
  maximise_editor = ()=>{
    this.setState((state)=>{
      return({
        editor_minimise:!state.editor_minimise
      })
    })

  }
  maximise_preview = ()=>{
    this.setState((state)=>{
      return({
        preview_minimise:!state.preview_minimise
      })
    })
  }
  editor_change = (e)=>{
    this.setState({
      markdown:e.target.value
    })
  }
  render(){
    const classes = (this.state.editor_minimise&&this.state.preview_minimise)?['editor','preview']:((this.state.editor_minimise)?['hide','preview maximise']:['editor maximise','hide'])
    const icon = (this.state.editor_minimise&&this.state.preview_minimise)?["fas fa-compress-arrows-alt","fas fa-compress-arrows-alt"]:((this.state.editor_minimise)?["fas fa-compress-arrows-alt","fas fa-expand-alt"]:["fas fa-expand-alt","fas fa-compress-arrows-alt"])
    return(
      <div className="main">
        <div className={classes[0]}>
          <Header click={this.maximise_editor} header_name="Editor" icon_name={icon[0]}/>
          <Editor change={this.editor_change} markdown={this.state.markdown}/>
        </div>
        <div className={classes[1]}>
          <Header click={this.maximise_preview} header_name="Preview" icon_name={icon[1]}/>
          <Preview markdown={this.state.markdown}/>
        </div>
      </div>
    )
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;