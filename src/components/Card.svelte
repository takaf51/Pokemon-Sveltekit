<script>
  export let name;
  export let description;
  export let imgURL;
</script>

<div class='bg-white rounded-lg flex flex-col items-center py-4'>
  <div class='bg-gray-200 w-[200px] h-[200px] border-2 border-gray-400 rounded-full flex justify-center'>      
    <img class='w-[60%]' src={imgURL}/>
  </div>
  <h1 class='font-bold text-4xl my-4'>{name}</h1>
  <p class='mx-6 text-center'>{description}</p>
</div>