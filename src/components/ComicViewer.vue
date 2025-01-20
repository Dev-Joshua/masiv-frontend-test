<template>
  <div class="container mx-auto p-4 mt-10 flex flex-col items-center">
    <h1 class="text-3xl font-bold text-cyan-700">Random Comics</h1>
    <h6 class="mt-2 text-gray-600">
      View your favorite comics at random and rate them as you like
    </h6>
  </div>
  <div>
    <div class="container mx-auto p-2 flex flex-col items-center mt-2">
      <div class="flex flex-row justify-center">
        <button
          class="bg-black hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4 mb-2 rounded"
          style="transition: all 0.5s ease"
        >
          Get Random Comic
        </button>
      </div>
      <div
        class="flex flex-row justify-center mt-2 border border-gray-200 rounded-lg p-4"
        style="
          width: 80%;
          background-color: white;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        "
      >
        <div class="flex flex-col items-center overflow-hidden p-4">
          <div class="flex flex-row justify-between w-full">
            <h2 class="text-3xl text-center font-bold my-4 text">
              Comic Title
            </h2>
            <div>
              <p>Comic Number</p>
              <p>Comic Year</p>
            </div>
          </div>
          <img src="" alt="" />Comic Image
          <p class="text-gray-600" style="margin-top: 20px">
            Comic Description
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
