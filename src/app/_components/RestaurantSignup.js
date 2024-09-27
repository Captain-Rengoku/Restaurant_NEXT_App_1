
const RestaurantSignUp=()=>{
    return(
        <>  
        <h3>Food Delivary Account Sign up</h3>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter email id" />
        </div>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter contact number" />
        </div>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter Restaurant name" />
        </div>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter City" />
        </div>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter Full Address" />
        </div>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Set Password" />
        </div>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Confirm Password" />
        </div>
        <div className="input-wrapper">
            <button className="button">Sign up</button>
        </div>
        </>
    )
}

export default RestaurantSignUp;