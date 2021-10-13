import Summary from "./Summary"

const Issue = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          height: '80px'
        }}>Issue
        <input type="text" placeholder='H' 
          style={{
            width: '30px',
            height: '30px',
            textAlign: 'center'
          }}/>
        <button style={{padding:'0.6rem'}}>Spara</button>
        <Summary />
        <div style={{display:'flex', flexDirection:'column', alignItems:"center"}}>
        <label>Faktisk tid</label>
        <input type='text' placeholder='H' 
          style={{
            width: '30px',
            height: '30px',
            textAlign: 'center'
            }} />
          </div>
        <button style={{padding:'0.6rem'}}>Spara</button>
      </div>
    </>
  )
}

export default Issue

//Stylingen är temporär och bara för att se hur det kan se ut.