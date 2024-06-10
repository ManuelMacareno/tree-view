import TreeView from './components/tree-view'
import menus from './components/tree-view/data'

function App() {

  return (
    <div>
      <TreeView menus={menus} />
    </div>
  )
}

export default App
