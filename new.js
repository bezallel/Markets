var timesRun = 0;
var stopinterv = setInterval(function twinkling(){
    timesRun += 1;
    if(timesRun === 50){
        clearInterval(stopinterv);
    }
    for(let i = 0; i < 5; i++){
        var starCounts = document.createElement('i');
        starCounts.className = 'fa-solid fa-asterisk'; 
        
        var wh = Math.floor(Math.random(1,10)*15);
        var $x = Math.floor(Math.random(0,4)*100);
        var $y = Math.floor(Math.random(0,4)*100);

        starCounts.style.position = 'relative';
        starCounts.style.fontSize = wh + 'px';
        starCounts.style.left = $x + 'vw';
        starCounts.style.top = $y + 'vh';
        starCounts.style.color = 'white';
        document.querySelector('.night-sky').appendChild(starCounts);
    }
}, 51)

// Your market data (replace with your actual data)
const marketsData = [
    { name: 'Abattoir Meat Market', location: 'Oko Oba Agege', info: 'This is a sprawling market where meat dealers converge to sell and slaughter cows, sheep, and cattle on a daily basis. The market offers raw beef and live cows at unbeatable prices that are often half the cost of other markets. Additionally, customers can purchase ponmo, livestock, and agriculture/farm products at wholesale prices. This market is a haven for those seeking affordable food items, making it a popular destination for food vendors and household shoppers alike. With its impressive selection and unbeatable prices, this market is a must-visit for anyone looking to purchase quality meat and agricultural products in bulk.', },
    { name: 'Agbalata market', location: 'badagry ', info: 'The Agbalata International Market, Badagry, is one of the major markets in Lagos. From the town’s highly revered mat, succulent coconut, to affordable foodstuffs, it is a place where you can get just about everything you want. Indeed, Agbalata has continued to play a leading role in the economic development of Badagry and its environs.' },
    { name: 'Alaba international market', location: 'Alaba, Ojo', info: 'A renowned electronics market in Africa, and its reputation extends beyond the borders of Lagos. The market attracts customers from neighboring countries, earning it the title of an international market. It is open every day except on Sundays and public holidays.With over five thousand shops, not including attachments and sub-shops, Alaba market is a bustling hub for electronics trade.' },
    { name: 'Alade Market', location: 'Allen Ikeja', info: 'This market has all kinds of food stuff, most especially Soup ingredient Oporoko, Dry Fish, Melon etc.'},
    {  name: "Ajah Market",location: "Ajah",info: "The market is well-known for its large selection of low-cost household items. Adeyemi Shopping Complex, Aliba Supermarket, Blenco Supermarket, Eleganza Shopping Mall, Novare Mall, and others are some of the other shopping options in Ajah."},
    {  name: "Ajina Market", location: "Alagbe Street, Ikorodu",info: "It is a sprawling open-air market particularly known for discounted household items, including foodstuff, fruits and vegetables.Ajina market is the place where the “ORO” shrine is located .This market is known for cheap and good agricultural produce."},
    {  name: "Aratumi Market",location: "Iba new site, Ojo",  info: "Aratunmi Market, while bustling with activity, primarily functions as a compact marketplace. It offers a convenient alternative for sourcing foodstuffs, sparing you the need to travel to Iyana-Iba."},
    {  name: "Arena Market", location: "Bolade Bustop, Agege Motor Road",info: "Reputed for having fashions stores, house hold items, Electronics at unbelievably discounted prices, The biggest Curtain and Beddings,food stuff, Fruits and a hub for repairing all kinds of electronics and electrical appliances."},
    {  name: "Badagry Market",location: "badagry ",  info: "The Badagry Market is majorly occupied by the Egun whose traditional occupations are farming and animal husbandry. Some of the major crops cultivated are maize, cassava, beans, oil palm, coconut and royal palms. Also, trading activities feature prominently in the area. Some of the major markets in Badagry are the Agbalata International Market, Hunto, Verekete and Ajara."},
    {  name: "Bali Market",location: "Broad street, Lagos Island",  info: "Known for where to buy quality white collar job clothes at cheap rates."},
    {  name: "Balogun Market",location: "Lagos Island", info: "Encompasses all. Balogun Market is the heart of Lagos Island. Located within a stone’s throw of Broadstreet, the market is one of the reasons Lagos became the commercial nerve centre of Nigeria. More interesting are the women who run the market, business smart and fashion savvy, they are arguably the most powerful women in the political stratosphere of Lagos. It is a one-stop shop where you can find almost everything you need. There are different sections for various goods and services, including cloth, provisions, accessories, and bridal items. It is a primary destination for anyone in search of “Asoebi” for weddings and other “Owambe” parties.You can be sure of getting almost everything you are looking for including thrift clothing stores."},
    {  name: "Bar Beach Market",location: "Victoria Island", info: "The Bar Beach Market offers an array of fresh fish and a limited selection of handicrafts, which may appeal to foreigners, art enthusiasts, and experts. Travelers are often drawn to places like the Bar Beach Market as it is conveniently situated near a variety of hotels, making it easily accessible. Visitors can purchase items such as wood carvings, masks, paintings, bangles, and some food items at this market. The market provides a unique cultural experience that captures the essence of Lagos."},
    {  name: "Bariga Market",location: "Adebayo street, Bariga, Shomolu",info: "This bustling market offers a diverse range of products, from clothing to food items. Freshly butchered meats of various animals – cows, goats, pigs, and chickens"},
    {  name: "Computer Village",location: "Ikeja",  info: "Computer Village is the largest technology market in Nigeria and Africa. It is predominantly populated by prominent phone sales shops, laptop shops, phone accessories shops, phone repairers, and sim activation shops. The market is open every day, except on Sundays and public holidays."},
    {  name: "Dosunmu Market",location: "Lagos Island", info: "Dosunmu Market serves as the ideal destination for procuring a wide range of baby essentials and mothercare products, all available at wholesale prices, even when purchasing in smaller quantities. Additionally, the market offers an extensive collection of textiles, cosmetics, as well as a diverse selection of shoes and bags."},
    {  name: "Ebute Ero Market",location: "Ebute Ero", info: "Originally the port through which the island communicated with the mainland of Lagos, and other parts of Nigeria, Ebute Ero (as it is aptly named in Yoruba) is one of the most crowded markets in Lagos and specializes in wines, ports, champagne and non-alcoholic drinks."},
    {  name: "Epe Fish Market", location: "Epe", info: "The Epe Fish Market is one of the most colourful and fascinating places to purchase crustaceans and freshwater fish. The market also offers exotic animals such as snails, alligators, tortoise etc. Fishes on sale can still be found alive and in woven baskets that are held around the market. Chefs who specialize in seafood consider the market their favorite source for all aquatic creatures."},
    {  name: "Idi Oro Maraket", location: "Oloosa, Mushin",  info: "Popularly known as the Plantain market, It’s a unique market mostly known for its sale of plantains and garri. Most of the market’s products are brought directly from the farm at Edo and Ondo states."},
    {  name: "Ijora Olapa Fish Market",location: "Ijora",  info: "Known for the sale of fish of various kinds and enormous sizes are often available. Fresh fish in cartons and live fish called “Onmi”, which means “live fish still breathing”, are also on sale as well."},
    {  name: "Iyana-Iba Market",location: "Iyana Iba", info: "Known for selling cheap food stuffs like egusi, crayfish, groundnut oil, Palm oil, beans, rice, flour and other must have food items you can think of. Fresh fruits are sold there at very cheap prices, Iyana oba boasts of the market that sells fruits at the cheapest prices in Lagos. Those who reside along Badagry express road axis and its environs would be familiar with this market."},
    {  name: "Ikotun Market",location: "Ikotun", info: "Located in the northwest region of Lagos State, Ikotun is not only a vibrant community but also the residence of Alimosho, the largest local government area in the state. This historical town has a legacy spanning over 500 years, with its origins tracing back to the Yoruba ancestors who embarked on a migration from Ile-Ife, the ancestral homeland of the Yoruba people. Ikotun is renowned for its affordability, making it one of the most cost-effective places to reside in Lagos. The community is home to approximately 400,000 residents and is surrounded by neighboring towns and localities, including Idimu, Ijegun, Igando, and Egbeda."},
    {  name: "Iddo Market",location: "Ebute-Metta",  info: "This market is widely known for selling bags of rice, beans, groundnut oil, among others, in bulk or wholesale. Although a small market, the trading centre provides cheap food goods for purchase."},
    {  name: "Idumota Market",location: "Idumota", info: "Popularly known as ‘Eko’: textiles, pieces of jewelry, shoes, interior decor, bags, accessories and clothes."},
    {  name: "Ile Epo Market",location: "Abeokuta Express Way",  info: "It is a hub of activities and you can get Fresh Tomatoes and Pepper aplenty, Fresh fruit and Vegetables in Bulk and a very low price. For people living in the Iyana Ipaja and Dopemu axis, this is the choice market when it comes to peppers."},
    {  name: "Ita Faji Market", location: "Lagos Island", info: "Famous for its sales of cheap meats due to the abundant local butchers that operate there.Also household utensils, such as baskets, plastics, enamel pans as well as foodstuffs of different kinds."},
    {  name: "Itunmoja Market", location: "Ikorodu, Ita Elewa", info: "This is one of the oldest market in Ikorodu Town the market operates daily from. Most of the goods sold are traditional items ranging from Herbs to Ritual Materials, Beads and Artifacts. The market area houses many traditional worshipers who are engaged in the spiritual activities this perhaps explains the reason for the nature of products offered for sale in the market."},
    {  name: "Isale Eko Market",location: "Ebute Ero, Lagos Island",  info: "This bustling marketplace is your go-to destination for a wide array of products, available both in wholesale and retail quantities. Whether you're in search of wedding gowns, clothing, shoes, bags, or any other item, you'll find it here. Step into the vibrant commercial epicenter of Lagos State, Nigeria, where one of the market scenes comes to life. Within Isale-Eko, notable locations include Iga-Iduganran Street, home to the Oba of Lagos's palace, and Adeniji Adele Road, among a few others."},
    {  name: "Jankarra Market", location: "Idumagbo Road, Lagos Island", info: "Major market for local and handmade products, these include tie and dyed cloths, trade beads and pieces of jewelry, pirated cassettes, pottery, and articles of clothing"},
    {  name: "Ladipo Market",location: "Ladipo Street, Mushin", info: "Renowned for its position as the primary spare parts market in Nigeria. The market is a hub for mechanics, car owners, and those in search of fairly used cars, spare parts, and phones. One unique feature of this market is the option to purchase fairly used car parts, which provides a budget-friendly alternative for those looking to repair their vehicles. It is often said that if you don’t see the spare part you are looking for in Ladipo market then it is not in Nigeria. People from faraway places source auto spare parts from this populated market. Despite the availability of second-hand parts, the quality of the products is maintained through the expertise of the traders and mechanics in the market."},
    {  name: "Agboju Market",location: "Amuwo Odofin", info: "This community marketplace is one of the best free attractions in Festac. But there's tons more to keep you entertained in the area. If you'd love some ideas about where to head to after Agboju Market, we suggest Teslim Balogun Stadium. You're sure to find some treasure or funny trinket among the stalls here. After you've had a thorough browse of things, enjoy a meal from one of the food vendors."},
    {  name: "Daleko Market",location: "Daleko road, Isolo", info: "Daleko Market is the chain distribution hub of both local and foreign grains in Lagos State. Goods such as rice, beans, groundnut oil, palm oil, sugar are sold at very reasonable prices."},
    {  name: "Mushin market",location: "4 Adegbite Ln, Mushin, Lagos, Nigeria",info: "Mushin Market stands as a prominent and highly frequented marketplace within Lagos. It encompasses variously sized warehouses, stalls, and open spaces for the display and sale of goods. Shoppers can discover a wide array of household products, including an extensive selection of food items, frozen foods, processed goods, and a diverse range of clothing materials. In essence, Mushin Market offers a comprehensive shopping experience, providing virtually everything one might seek."},
    {  name: "Oyingbo Market",location: "Ebute-Metta",  info: "One of the oldest and largest markets in Lagos State. It serves as a major hub for traders and buyers of foodstuffs, clothing, electronics, and other household items. Also popular for its supply of fresh fruits, vegetables, and other foodstuffs, which are sourced from different parts of the country. There is a section dedicated to the sale of meat and poultry products, which are usually sold at affordable prices, Clothing and textile section which has a wide variety of fabrics and materials for both men and women, ranging from traditional prints to modern designs. The market is also a major hub for second-hand clothing, with traders importing bales of used clothing from Europe and America for resale.. Additionally, there are a number of food vendors and eateries within the market, where shoppers can enjoy local delicacies."},
    {  name: "Mile 2 Market",location: "Mile 2", info: "It is an open-air market particularly known for discounted household items, including Foodstuff, Fruits,Vegetables,Yam G.oil, Palm oil in retail."},
    {  name: "Mile 12 Market",location: "Ketu",info: "This Market has been providing affordable bulk perishable food items to Lagosians, Nigerians, and even for importation for about 30 years.A well-known fact about the Mile 12 market in Lagos is that it is the largest perishable food market in Nigeria, and one of the largest in West Africa. The market handles an enormous quantity of food items daily, with several thousands of metric tons of foodstuffs transacted on a daily basis. It is an important hub for food distribution in Lagos and other parts of Nigeria, with produce sourced from various parts of the country and beyond. The market has become a crucial part of Lagos’s economy and food supply chain."},
    {  name: "Ogba Sunday Market", location: "Ogba ",info: "The Ogba Sunday Market is a market that caters majorly to foodstuffs. It is situated off Ogba Ijaiye Road and was open mostly on weekends. This helped working-class people meet up with their various shopping. Several years back, the market was strictly opened on Sundays, but recently, the market now operates every day due to popular demand."},
    {  name: "Ojah Market",location: "Badagry ",  info: "Located near the border with Benin Republic, Ojah is a picturesque market nestled along the coastline, offering a wide array of goods. It truly exemplifies the essence of a local market. Here, you can discover an extensive selection of fashion accessories, ranging from shoes and bags to cosmetics. Additionally, Ojah features a food market where you can indulge in an assortment of seafood, including shrimps, lobsters, prawns, and more. It is a seafood lover’s haven. Ojah market caters to the needs of both Nigerians and Beninese residents. Given the prevalent fishing industry in the area, you can relish a delectable fish-centric meal if that's your preference, all at affordable prices. The women of Badagry are famous for creating a savory smoked fish that is sought after all over Nigeria. What adds to the charm of this place is its diverse nature—it's a mixed market, offering a plethora of French products from Benin Republic due to its close proximity."},
    {  name: "Ojodu Market", location: "Ojodu Berger", info: "Ojodu market is renowned for offering discounted household items, including fresh vegetables, food essentials, stylish shoes, fashionable bags, and a selection of electronics. It caters to a diverse range of shoppers, providing a budget-friendly and comprehensive shopping experience for residents and visitors alike."},
    {  name: "Oke Odo Market",location: "Agbado Oke Odo",  info: "Comprising of merchants from neighbouring towns and farms, the market was established in 1983 by the then Ikeja Local Government Area Council. The market is known for its different foodstuffs, ranging from garri, beans, palm oil, pepper, yams, tomatoes, vegetables, fish, meats, onions to grains like millet, wheat, rice, sorghum, maize, groundnut, etc."},
    {  name: "Oniru New Market",location: "Oniru, Victoria Island",info: "New Oniru Market stands as a prominent urban marketplace, offering a wide array of products encompassing groceries, apparel, building materials, and electrical appliances. While it may not be the most budget-friendly option, it boasts exceptional accessibility, making it a convenient choice for shoppers."},
    {  name: "Vespa market",location: "Ijanikin, Ojo",info: "Vespa Market is renowned for its collection of affordable foreign shoes and bags. Whether you're a reseller or in need of personal items, this Lagos-based market is a prime destination to discover enticing deals on footwear and handbags. However, it's essential to note that road access to the market may be challenging due to ongoing construction. To make the most of your visit, consider checking the days when new shipments arrive to ensure a satisfying shopping experience."},
    {  name: "Oshodi Market",location: "Oshodi", info: "Following the demolition of the old Owonifari location, the market has been relocated to Isopakodowo. The new market comprises over 600 shops and hundreds of kee Clamps, accommodating Asoebi marketers, foodstuffs sellers, and fruit sellers."},
    {  name: "Téjúoshó Market", location: "Ojuelegba-Itire Road, Yaba",  info: "Tejuosho Market stands as a contemporary, state-of-the-art marketplace. In the past, it was a traditional middle-class market known for its competitive pricing. Within Tejuosho Market, you'll discover an extensive range of items catering to your domestic, personal, and business requirements, including clothing, jewelry, and various food products."},
    {  name: "Sangotedo Market",location: "Sangotedo", info: "Sangotedo Market may not be the most budget-friendly option for purchasing food items, but it offers a unique and engaging experience for those who relish the art of bargaining and love exploring a diverse range of culinary products. This community-based market is perfect for a quick stop to stock up on essentials like meat, vegetables, condiments, building materials and local ingredients. Skillful haggling often leads to significant discounts on various goods."},
    {  name: "Kajola Plank Market",location: "Iganmu Amukoko",  info: "It is an open market popularly known for discounted building plank, including Afara, Apepe, Araba, Idingbo, Mahogany, 2 BY 2, 4 BY 4, Millainah, Orin Dudu, Okedo, Sindarella and other Building Materials"},
    {  name: "Katangua Market", location: "Abule Egba",info: "Also known as “bend down select market” Where you can get different types of clothes and shoes with different grades. Katangua market is where you can get second hand wears and household items for little money.Mondays, Wednesdays and Fridays are the days they get new consignments."},
    {  name: 'Akodo Market, Epe',  location: "Agbado Oke Odo",  info: "Comprising of merchants from neighbouring towns and farms, the market was established in 1983 by the then Ikeja Local Government Area Council. The market is known for its different foodstuffs, ranging from yams, garri, beans, palm oil, pepper, yams, tomatoes, vegetables, fish, meats, onions to grains like millet, wheat, rice, sorghum, maize, groundnut, etc."},
    {  name: 'Liverpool Under-Bridge Market',  location: 'Apapa', info: "Also known as liverpool crayfish market, this market is easy to find because it is near to the famed Tincan Island in Apapa as well as Creek Road. This market specializes in both fresh and dried fish. As a result of the nearby seaports, it is a relatively large market with different foodstuff for sale."},
    {  name: 'Makoko Asejire Market', location: 'A Lagoon in Lagos', info: "Situated on an elevation of about 4 meters above sea level, This is a community on water and land so their main occupation is fishing. There are lots of fresh and live fish for sale. You will find different varieties like white Cat fish, Tilapia fish,Sniper fish, Shiny-nose, Red-snapper, Prawns, Crab, Barracuda Fish and more in different sizes. You can also get Smoked Fish there."},
    {  name: 'Pelewura Market', location: 'Lagos Island', info: "At Pelewura Market, you can purchase a wide variety of items, including textiles, interior decor, jewelry, shoes, bags, and more, all at very affordable prices."},
    {  name: 'Rauf Aregbesola Market',   location: 'Iyana Ipaja ', info: "Rauf Aregbesola Market is an expansive open-air marketplace, renowned for offering discounted household items such as fruits, vegetables, food essentials, secondhand clothing, snacks, provisions, and beverages."},
    {  name: 'Sandgrouse market',  location: 'Sura Road, Simpson Street', info: "Sandgrouse Market is more or less like a mall. It has been transformed into a modern, mixed-use facility that closely resembles a mall. Here, you can find a diverse selection of imported goods."},
    {  name: 'Jankara Market', location: 'Ijaiye',   info: "A popular destination for shoppers looking for locally made goods. From Curtains, shoes, tie-dyed cloth to trade beads, jewellery, pottery, clothing, and even pirate cassettes, this market has it all. Dominated by Igbo traders, Jankara Market is known for its affordable prices and competitive prices. A visit to Jankara Market promises to be a memorable shopping experience."},
    {  name: "Odunade market Orile",location: "Odunade market Orile",  info: "Odunade Market, strategically situated in Lagos, offers a wide selection of building materials at competitive wholesale and retail prices. The market is renowned for its high probability of providing top-quality materials at affordable rates."},
    {  name: "Ojuwoye Market",location: "Ojuwoye Market",  info: "Ojuwoye Market in Mushin, Lagos, is a renowned and affordable hub for various businesses, offering a wide range of bulk products. It holds the status of one of Lagos State's leading wholesale markets and is strategically located with essential facilities nearby. While the market provides security, caution is advised due to challenging road conditions, especially during the rainy season."},
    {  name: "Plaintain Market",location: "Plaintain Market",info: "Plantain Market is your go-to destination for the finest plantains at affordable prices. It caters to both wholesale and retail customers, offering a wide variety of plantains to choose from. Whether you're looking for large or small bunches, dwarf or giant plantains, green or ripe ones, this market has it all. It's the ultimate place for plantain enthusiasts."},
    {  name: "White sands Market", location: "White sands Market", info: "This bustling market, serves as a major hub for a wide array of food-related products. Farmers from various regions of Nigeria flock to this market to supply goods in large quantities. It also attracts numerous smaller markets scattered throughout Lagos, all seeking to make wholesale purchases. Here, you can find a remarkable range of items at remarkably low prices, including various types of yams, garri, vegetables, fruits, crayfish, smoked fish, and periwinkles."},
    {  name: "Ladipo Paper Market",location: "Ladipo Paper Market",info: "Ladipo Paper Market, located in Mushin, has gained fame as a comprehensive marketplace for all things related to printing and printing materials, with paper being just one facet. It serves as a hub for various design and printing services, including Direct Image, Large Format, graphic design, and impressions, all offered at budget-friendly rates. Furthermore, you can find a wide array of printing materials here. The shops in this market are independently owned, varying in size and the sophistication of their printing equipment."},
    {  name: "Aswani Market",location: "Aswani Market",info: "Reputed for selling fairly used items at ridiculously cheap prices. Clothing items, for instance popularly known as 'Okrika', 'gbogbo', or 'bend down select', can be purchased for as low as 200 NGN. The market also has traders selling new clothing items per yard, bags, shoes, underwears, and even foodstuffs. One can even get damaged electrical equipment or tools fixed for as low as 500 NGN. Aswani market is open every day of the week, but Mondays are designated for shoes and bags sales."},
    {  name: "Leather market",location: "Leather market",  info: "Leather Market, situated within the bustling Mushin Market, stands as one of Nigeria's prominent hubs for leather goods. While it may be smaller in size compared to markets in Aba, Kano, and Onitsha, it offers an extensive range of raw leather products. Here, you can explore various types of leather, including animal skin leather, faceless leather, suede leather, and much more. Moreover, the chances of discovering high-quality, locally crafted luxury leather items are remarkably high."},
    {  name: "Yaba Market",location: "Yaba Market",  info: "At Yaba Market, you'll discover a wide-ranging selection of fashion items, including jeans, jackets, pants, suits, tuxedos, polos, tee-shirts, bow ties, shoes, and various other stylish accessories, as well as secondhand clothing. Yaba Market distinguishes itself by offering items at more budget-friendly prices compared to Tejousho Market. Both markets impress visitors with their extensive product offerings. Shoppers can explore high-quality clothing options at reasonable rates, and there's even a dedicated section for secondhand apparel. The market draws a significant number of youthful customers, primarily due to its location in Lagos Mainland, an area densely populated with institutions of higher learning."},
  ];
// Get the night-sky container
const nightSky = document.querySelector('.night-sky');

// Create stars with market data
marketsData.forEach((market) => {
    const starContainer = document.createElement('div'); // Container for the star
    starContainer.className = 'star-container';

    const star = document.createElement('i');
    star.className = 'fa-solid fa-asterisk';
    star.dataset.name = market.name;
    star.dataset.location = market.location;
    star.dataset.info = market.info;

    // Set styles and other attributes for stars (position, size, etc.)
    star.style.position = 'absolute';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;


    // Append the star to the container
    starContainer.appendChild(star);

    // Add stars to the night-sky container
    nightSky.appendChild(starContainer);

    // Create a tooltip element for each star
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    // Add a hover event listener to each star
    starContainer.addEventListener('mouseover', (e) => {
        const name = e.currentTarget.querySelector('i').dataset.name;
        // Display market information in the tooltip
        showTooltip(name, tooltip);
    });

    // Add a mouseout event listener to hide the tooltip
    starContainer.addEventListener('mouseout', () => {
        // Hide the tooltip
        tooltip.style.display = 'none';
    });

    // Add a click event listener to each star
    starContainer.addEventListener('click', (e) => {
        const name = e.currentTarget.querySelector('i').dataset.name;
        const location = e.currentTarget.querySelector('i').dataset.location;
        const info = e.currentTarget.querySelector('i').dataset.info;

        // Display market information in the info card
        displayInfoCard(name, location, info);
    });
});



// Function to display the tooltip
function showTooltip(name, tooltip) {
    // Update the content of the tooltip to the market name
    tooltip.textContent = name;

    // Position the tooltip near the mouse cursor
    tooltip.style.left = `${event.pageX}px`;
    tooltip.style.top = `${event.pageY}px`;

    // Show the tooltip
    tooltip.style.display = 'block';
}

// Function to display the info card
function displayInfoCard(name, location, info) {
    // Populate modal content
    const modalName = document.getElementById('modalName');
    const modalLocation = document.getElementById('modalLocation');
    const modalInfo = document.getElementById('modalInfo');

    modalName.textContent = name;
    modalLocation.textContent = `Location: ${location}`;
    modalInfo.textContent = info;

    // Display the modal
    const modal = document.getElementById('marketModal');
    modal.classList.remove('blur-background'); // Remove background blur

    // Show the modal
    modal.style.display = 'block';

    // Remove background blur
    document.body.style.filter = 'none';
}

// Function to hide the modal
function hideModal() {
    // Hide the modal
    const modal = document.getElementById('marketModal');
    modal.classList.remove('blur-background'); // Remove background blur

    // Hide the modal
    modal.style.display = 'none';

    // Remove background blur
    document.body.style.filter = 'none';
}

// Close the modal when the close button is clicked
const modalClose = document.getElementById('modalClose');
modalClose.addEventListener('click', hideModal);

// Close the modal when the user clicks outside the modal
window.addEventListener('click', (event) => {
    const modal = document.getElementById('marketModal');
    if (event.target === modal) {
        hideModal();
    }
});

// JavaScript to toggle the dropdown options and display corresponding star info
document.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".custom-dropdown");
    const selectedOption = e.target.closest(".dropdown-option");

    if (e.target.closest(".custom-dropdown")) {
        dropdown.classList.toggle("active");
    } else {
        dropdown.classList.remove("active");
    }

    if (selectedOption) {
        const marketName = selectedOption.getAttribute("data-value");
        expandStarAndDisplayInfo(marketName);
    }
});

// Function to expand the corresponding star and display info card
function expandStarAndDisplayInfo(name) {
    const stars = document.querySelectorAll(".fa-asterisk");
    stars.forEach((star) => {
        if (star.dataset.name === name) {
            // Trigger a click event on the matching star
            const clickEvent = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            star.dispatchEvent(clickEvent);
        }
    });
}

// Add event listeners to the dropdown options
const dropdownOptions = document.querySelectorAll(".dropdown-option");
dropdownOptions.forEach((option) => {
    option.addEventListener("click", () => {
        const marketName = option.getAttribute("data-value");
        expandStarAndDisplayInfo(marketName);
    });
});

// Define an array of bright colors and white
const brightColors = ['#800080', 'blue', 'orange', '#c54c82','#9bc400', '#ff0000', 'cyan', 'white'];
let currentColorIndex = 0; // Start with the first color in the array

// Function to change the color of asterisks for market stars and the button icons
function changeAsteriskColors() {
    const marketStars = document.querySelectorAll('.fa-asterisk');
    currentColorIndex = (currentColorIndex + 1) % brightColors.length;
    const newColor = brightColors[currentColorIndex]; // Get the next color

    marketStars.forEach((star) => {
        star.style.color = newColor;
        star.style.textShadow = `0 0 10px ${newColor}`;
    });

    
    const changeColorButtonIcon = document.querySelector('#changeColorButton i');
    changeColorButtonIcon.style.color = newColor;

    // Update the color of the "Close" button
    const modalCloseButton = document.querySelector('#modalClose');
    modalCloseButton.style.backgroundColor = newColor;

    // Check if the background color is cyan or white and set the font color accordingly
    if (newColor === 'cyan' || newColor === 'white') {
        modalCloseButton.style.color = 'black';
    } else {
        modalCloseButton.style.color = 'white'; 
        }

    // Update the color of the dropdown arrow
    const arrowIcon = document.querySelector('.fa-arrow-up-from-bracket');
    arrowIcon.style.color = newColor;
}

// Add click event listener to the changeColorButton
const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', () => {
    changeAsteriskColors();
});





const dropdownSelected = document.querySelector('.dropdown-selected');
const arrowIcon = document.querySelector('.fa-arrow-up-from-bracket');

let isDropdownOpen = false;

dropdownSelected.addEventListener('click', function () {
    const dropdownOptions = document.querySelector('.dropdown-options');
    dropdownOptions.classList.toggle('active');
    isDropdownOpen = !isDropdownOpen;

    // Toggle the 'rotated' class based on the 'isDropdownOpen' state
    if (isDropdownOpen) {
        arrowIcon.classList.add('rotated');
    } else {
        arrowIcon.classList.remove('rotated');
    }
});






// Add click event listener to the Close button
const modalCloseButton = document.getElementById('modalClose');
modalCloseButton.addEventListener('click', () => {
   
});





// Function to make stars movable with tap-and-hold for mobile devices
function makeStarsMovable() {
    const stars = document.querySelectorAll('.fa-asterisk');

    stars.forEach((star) => {
        let isDragging = false;
        let tapTimeout;
        let tapHoldThreshold = 500; // Adjust the threshold (in milliseconds) as needed

        star.addEventListener('mousedown', startMove);
        star.addEventListener('touchstart', startMove, { passive: false });

        function startMove(e) {
            e.preventDefault();

            // Detect tap-and-hold
            tapTimeout = setTimeout(() => {
                isDragging = true;
                clearTimeout(tapTimeout); // Clear the tap timeout
                tapTimeout = null;

                // Prevent further mouse events on this star
                star.removeEventListener('mousedown', startMove);
                
                // Add move and end event listeners for dragging
                document.addEventListener('mousemove', moveStar);
                document.addEventListener('touchmove', moveStar, { passive: false });
                document.addEventListener('mouseup', endMove);
                document.addEventListener('touchend', endMove);
            }, tapHoldThreshold);
        }

        function moveStar(e) {
            if (!isDragging) return;

            const x = e.clientX || e.touches[0].clientX;
            const y = e.clientY || e.touches[0].clientY;

            star.style.left = x - star.offsetWidth / 2 + 'px'; // Adjust the centering
            star.style.top = y - star.offsetHeight / 2 + 'px';
        }

        function endMove() {
            if (isDragging) {
                isDragging = false;

                // Remove move and end event listeners for dragging
                document.removeEventListener('mousemove', moveStar);
                document.removeEventListener('touchmove', moveStar, { passive: false });
                document.removeEventListener('mouseup', endMove);
                document.removeEventListener('touchend', endMove);
            } else {
                // If not dragging, it's a single tap, display info card
                const name = star.dataset.name;
                const location = star.dataset.location;
                const info = star.dataset.info;

                displayInfoCard(name, location, info);
            }
        }
    });
}

// Call the function to make stars movable with tap-and-hold
makeStarsMovable();




// Function to toggle the popup card and blur effect
function togglePopupCard() {
    const popupCard = document.querySelector('.popup-card');
    const nightSky = document.querySelector('.night-sky');
    const dropdownSelected = document.querySelector('.dropdown-selected');
    const changeColorButton = document.getElementById('changeColorButton');

    if (popupCard.style.display === 'none' || popupCard.style.display === '') {
        // Show the popup card and apply blur
        popupCard.style.display = 'block';
        nightSky.style.filter = 'blur(10px)';
        
        // Hide the dropdown selected and change color button
        dropdownSelected.style.display = 'none';
        changeColorButton.style.display = 'none';
    } else {
        // Hide the popup card and remove blur
        popupCard.style.display = 'none';
        nightSky.style.filter = 'none';
        
        // Show the dropdown selected and change color button
        dropdownSelected.style.display = 'block';
        changeColorButton.style.display = 'block';
    }
}

// Call the togglePopupCard function when needed, e.g., on page load
togglePopupCard();

// Add click event listener to close button
const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', togglePopupCard);


// Function to animate typing effect for a given element
function typeText(element, text, speed) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// Function to start the typing animation for the popup card content
// Function to animate typing text
function typeText(element, text, delay) {
    let index = 0;

    function type() {
        if (index < text.length) {
            if (text[index] === '\n') {
                element.innerHTML += '<br>'; // Add line break
            } else {
                element.innerHTML += text[index];
            }
            index++;
            setTimeout(type, delay);
        }
    }

    type();
}


function startTextAnimation() {
    const popupCard = document.querySelector('.popup-card');
    const heading = popupCard.querySelector('h2');
    const body = popupCard.querySelector('p');

    // Clear existing content
    heading.innerHTML = '';
    body.innerHTML = '';

    const headingText = "Explore the Markets of Lagos";
    const bodyText = `
    Markets play a pivotal role in our lives, acting as community heroes and underlining their importance in the fabric of an economy. They foster connections, support local businesses, and ensure food security.\nEmbark on a cosmic adventure to explore Lagos city's markets among the stars and discover their unique and captivating characteristics.\nClick a star, move a star, either way, they have something to say.\nHappy exploring! 
    `;


    // Typing speed in milliseconds (adjust as needed)
    const typingSpeed = 10;

    // Start typing animation for heading and body
    typeText(heading, headingText, typingSpeed);
    setTimeout(() => {
        typeText(body, bodyText, typingSpeed);
    }, headingText.length * typingSpeed); // Delay body typing until heading is finished
}

// Call the startTextAnimation function to start the typing animation when the page loads
startTextAnimation();


// Existing JavaScript code...

// Attach event delegation for mouseover
nightSky.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.classList.contains('fa-asterisk')) {
        const name = target.dataset.name;
        showTooltip(name, document.querySelector('.tooltip')); // Pass the tooltip element directly
    }
});

// Function to hide the tooltip
function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

// Attach event delegation for click on stars
nightSky.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('fa-asterisk')) {
        const name = target.dataset.name;
        const location = target.dataset.location;
        const info = target.dataset.info;
        displayInfoCard(name, location, info);
        
        // Hide the tooltip
        hideTooltip();
    }
});

// Disable tooltip for mobile devices
function disableTooltipForMobile() {
    const tooltips = document.querySelectorAll('.tooltip');
    const isMobile = window.innerWidth <= 767; // Adjust the breakpoint as needed

    tooltips.forEach((tooltip) => {
        if (isMobile) {
            tooltip.style.display = 'none';
        } else {
            tooltip.style.display = 'block';
        }
    });
}

// Call the function to disable tooltip for mobile devices
disableTooltipForMobile();

// Function to make stars clickable on mobile devices
function makeStarsClickable() {
    const stars = document.querySelectorAll('.fa-asterisk');

    stars.forEach((star) => {
        star.style.cursor = 'pointer'; // Change cursor style to indicate clickability

        star.addEventListener('click', (e) => {
            const name = star.dataset.name;
            const location = star.dataset.location;
            const info = star.dataset.info;

            // Display market information in the info card
            displayInfoCard(name, location, info);
        });

        // Handle touch events for mobile devices
        star.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent default touch behavior
            const name = star.dataset.name;
            const location = star.dataset.location;
            const info = star.dataset.info;

            // Display market information in the info card
            displayInfoCard(name, location, info);
        });
    });
}

// Call the function to make stars clickable on mobile devices
makeStarsClickable();

