<template>
   <br>
   <br>
   <br>
<div class="header__container">
   <div class="header__content">
      <div class="header__meta">
         <button type="button" class="menu__icon icon-menu"><span></span></button>

         <h1 class="header__title title-h1">
            {{ $title }}Главная
         </h1>
      </div>

      <div class="header__actions">
         <div class="header__language">
            <ul>
               <li>
                  <a href="#">
                     kz
                  </a>
               </li>
               <li>
                  <a href="#" class="_active">
                     ru
                  </a>
               </li>
               <li>
                  <a href="#">
                     en
                  </a>
               </li>

            </ul>
         </div> 
         <div class="header__profile profile _parent-block">
            
               <div class="profile-header__icon">
                  U
               </div>
               <div class="profile-header__info">
                  <div>
                     <p>username
                     </p>
                     <span>userrole</span>
                  </div>
               </div>
           
         </div>
      </div>
   </div>
</div>
</template>

<style>
.header__title {
   margin-right: 20px;
   margin-left: 10px
}

.title-h1 {
   font-weight: 600;
   line-height: 24px;
   color: #151d48
}
</style>

<script>
export default {
    name:"HeaderNav"
}
</script>