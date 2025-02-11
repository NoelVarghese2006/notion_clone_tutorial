import NewDocumenButton from "./NewDocumenButton"  

function Sidebar() {
  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">

        <div className="hidden md:inline">
            <NewDocumenButton />
        </div>
    </div>
  )
}

export default Sidebar