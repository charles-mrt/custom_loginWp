

var contentBox = document.createElement( "div" )
var userIcon = document.createElement( "span" )
var lockIcon = document.createElement( "span" )


function createUserIcons() {         
    contentBox.classList.add( "login-header" )
    userIcon.classList.add( "user-icon", "dashicons", "dashicons-businessperson" )          
    lockIcon.classList.add( "lock-icon", "dashicons", "dashicons-lock" )

    const login = document.querySelector( "#login" )   

    login.prepend( contentBox )
    contentBox.appendChild( userIcon )
    contentBox.appendChild( lockIcon )
    
} createUserIcons()



function shiftUserIconByInputClick() {	

	addEventListener( "click" , ( event ) => {

        const inputnameId = document.querySelector( "#user_login" )
        const inputpasswordId = document.querySelector( "#user_pass" )
    	
        const isInputname = inputnameId.contains( event.target )
    	const isInputpassword = inputpasswordId.contains( event.target )
    	

        if ( isInputname ) {
            userIcon.classList.add( "user-show" )
            lockIcon.classList.remove( "lock-show" )                   
        }
        else if ( isInputpassword ) {
            lockIcon.classList.add( "lock-show" )   
            userIcon.classList.remove( "user-show" )
        }else{
            lockIcon.classList.remove( "lock-show" )   
            userIcon.classList.remove( "user-show" ) 
        }

    })
 
} shiftUserIconByInputClick()



function errorLogin() {
    const login_error = document.querySelector( "#login_error" )

    if ( login_error ) {
        document.querySelector( ".user-icon" ).classList.add( "login_error" )       
    }

} errorLogin()

    
 