<template>
  <div class="hero">
      <div class="container">
	    <div class="innerC">
	  		<div class="heading">
	  			<div class="code-with-image">
	  				<img src="../../assets/icons/errorlogo.svg"  height="120" width="120"/>
	  				<span> {{error.code}}</span>
	  				<p>{{error.message}}</p>	
	  			</div>	
	  		</div>
		  	<div class="subhead_desc">
		    	<h1 class="subheading">Oops.. You just found an error page..</h1>
		    	<p class="description">
		    		{{error.description}}
		    	</p>
	  		</div>
        </div>
      </div>
  </div>
</template>

<script>
	export default {
		props:['error']
	}
</script>
<style scoped>
	.hero {
		height:100%;
		width:100%;
		background-size : 435px;
	}
	.container{
		background: rgba(255,255,255,0.8);
		height:100%;
		width:100%;
	}
	.container .innerC {
		height : auto;
		width : 100%;
		margin:auto;
		padding : 5% 0;
	}
	.innerC .heading p{
		font-size:36px;
		margin : 0;
		padding : 0;
		margin-top:-25px;
		margin-bottom:25px;
	}
	.innerC .heading {
		padding:0 8px;
		color:#E24C4B;
		margin:0;
		font-weight : bold;
		font-size:10rem;
	}
	.innerC .subhead_desc {
		padding: 0 16px;
		text-align : center;
	}
	.subhead_desc .subheading {
		padding:16px;
		color:#777;
		margin:0;
	}
	.subhead_desc .description {
		font-size:24px;
		margin:auto;
		color:#c1c1c1;
		width:75%;
	} 
</style>

