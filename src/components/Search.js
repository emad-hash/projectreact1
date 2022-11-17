import React from 'react'

function Search() {
  return (
    <div>
      <div class=" h-full w-full flex justify-center items-center">
	<div class="container mx-auto bg-indigo-500 rounded-lg p-14">
		<form>
			<h1 class="text-center font-bold text-white text-4xl mb-10">Find the perfect domain name</h1>
				<div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
					<input class="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Search your domain name" />
					<div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
						<select id="Com" class="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
            <option value="com" selected>fillter</option>
            <option value="net">net</option>
            <option value="org">org</option>
            <option value="io">io</option>
          </select>
						<button class="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
					</div>
				</div>
		</form>
	</div>
</div>
     </div>
  )
}

export default Search