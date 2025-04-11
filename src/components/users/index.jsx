import UserCard from "../userCard";
import React from "react";

const Users = ({users}) => {
    return(
        <React.Fragment>
{     
      
    
       users.map((items) => <UserCard key={items.id} userName={items.userName} photo={items.photo}/>
    )
        
}

        </React.Fragment>

    );
};

export default Users;