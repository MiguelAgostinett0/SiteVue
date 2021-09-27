<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a v-link="{ path: '/card' }">Cards</a></li>
                <li><a v-link="{ path: '/buttons' }">Sobre</a></li>
                <li><a v-link="{ path: '/buttons' }">Contato</a></li>
                <button class="login">Login</button>
		        <button class="register">Registrar</button>
            </ul>
        </div>
        
    </nav>
</template>

<script>
export default{

}
</script>

<style>
button.login{
    margin-right: 15px;
    border-color:transparent;
	border-radius: 10px;
	margin-left: 20px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 5px;
	padding-top: 5px;
	background: #fff;
	color: #e26971;

    transition: background-color 1s, box-shadow 0.5s, color 1s;}
button.login:hover{
    transition-property: background-color, box-shadow, color;
	transition-duration: 0.5s, 0.3s, 0.5s;
	transition-delay: 0s, 0.2s, 0.2;

	background-color: #e26971;
	color: #fff;
	

	box-shadow: 0px 0px 10px 5px #fff ;
}

button.register{
    margin-right: 15px;
    border-color:transparent;
	border-radius: 10px;
	margin-left: 20px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 5px;
	padding-top: 5px;
	background: #fff;
	color: #e26971;

    transition: background-color 1s, box-shadow 0.5s, color 1s;


}

button.register:hover{
	transition-property: background-color, box-shadow, color;
	transition-duration: 0.5s, 0.3s, 0.5s;
	transition-delay: 0s, 0.2s, 0.2;

	background-color: #e26971;
	color: #fff;
	

	box-shadow: 0px 0px 10px 5px #fff ;
}
</style>