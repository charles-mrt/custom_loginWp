

var contentBox = document.createElement( "div" )
var userIcon = document.createElement( "span" )
var lockIcon = document.createElement( "span" )


/* create header with wp with dash-icons */
function createUserIcons() {         
    contentBox.classList.add( "login-header" )
    userIcon.classList.add( "user-icon", "dashicons", "dashicons-businessperson" )          
    lockIcon.classList.add( "lock-icon", "dashicons", "dashicons-lock" )

    const login = document.querySelector( "#login" )   

    login.prepend( contentBox )
    contentBox.appendChild( userIcon )
    contentBox.appendChild( lockIcon )
    
} createUserIcons()


/* focus the input filds to changes dash-icons color */
function shiftUserIconByFocus() {	

    const inputnameId = document.querySelector( "#user_login" )
    const inputpasswordId = document.querySelector( "#user_pass" )
    
        inputnameId.addEventListener( "focus" , () => {
            userIcon.classList.add( "user-show" )    
        }) 

        inputpasswordId.addEventListener('focus', () => {
            lockIcon.classList.add( "lock-show" )    
        })

        inputnameId.addEventListener( "blur" , () => {
            userIcon.classList.remove( "user-show" )  
        })

        inputpasswordId.addEventListener('blur', () => {
            lockIcon.classList.remove( "lock-show" )                
        })
	
} shiftUserIconByFocus()



/* triggers alert on dash-icons when login error */
function errorLogin() {
	
    const login_error = document.querySelector( "#login_error" )

    if ( login_error ) {
        document.querySelector( ".user-icon" ).classList.add( "login_error" )       
    }

} errorLogin()

    
 
