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
    { name: 'Abattoir Meat Market', location: 'Oko Oba Agege.', info: 'This is a sprawling Market where meat dealers converge to sell and slaughter cows, sheep, and cattle on a daily basis. The market offers raw beef and live cows at unbeatable prices that are often half the cost of other markets. Additionally, customers can purchase ponmo, livestock, and agriculture/farm products at wholesale prices. This market is a haven for those seeking affordable food items, making it a popular destination for food vendors and household shoppers alike. With its impressive selection and unbeatable prices, this market is a must-visit for anyone looking to purchase quality meat and agricultural products in bulk.' },
    { name: 'Agbalata Market', location: 'Market, Road, 103101, Badagry ', info: 'The Agbalata International Market, Badagry, is one of the major markets in Lagos. From the town’s highly revered mat, succulent coconut, to affordable foodstuffs, it is a place where you can get just about everything you want. Indeed, Agbalata has continued to play a leading role in the economic development of Badagry and its environs.' },
    { name: 'Alaba international Market', location: 'Alaba, Ojo.', info: 'A renowned electronics market in Africa, and its reputation extends beyond the borders of Lagos. The market attracts customers from neighboring countries, earning it the title of an international market. It is open every day except on Sundays and public holidays.With over five thousand shops, not including attachments and sub-shops, Alaba market is a bustling hub for electronics trade.' },
    { name: 'Alade Market', location: 'Somolu 102216.', info: 'Alade Market is a true one-stop destination where you can find nearly anything you need, making it an ideal spot for your weekly shopping if a trip to Mile 12 is not feasible. This bustling market offers an extensive range of goods, including household items, groceries, electronics, fresh produce, and much more. While it provides convenient access, it tends to be bustling throughout the day. Additionally, chess enthusiasts can enjoy games right beside Bright Cosmetics.'},
    { name: 'Alade Market (New)', location: 'Obafemi Awolowo Way, Oba Akran 101233.', info: 'The New Alade Market is a modernized version of the former Alade Market that once stood on Allen Avenue, Ikeja. This market boasts a diverse range of vendors, including provision dealers, bulk drink sellers, food vendors, and fashion retailers offering items like Emperiole and Radek. Many vendors have transitioned from the old Alade market to this location, although prices here can be on the higher side, so shoppers may need to hunt for the best bargains.'},
    {  name: "Ajah Market",location: "Ajah.",info: "Known for its vast array of affordable household products, the market in Ajah is a popular choice. In addition to this market, shoppers can explore alternative retail destinations such as Adeyemi Shopping Complex, Aliba Supermarket, Blenco Supermarket, Eleganza Shopping Mall, Novare Mall, and more in the Ajah area."},
    {  name: "Ajina Market", location: "Alagbe Street, Ikorodu.",info: "Ajina Market, a vast open-air marketplace, is renowned for its affordable household goods, encompassing foodstuffs, fruits, and vegetables. Notably, the market also houses the 'ORO' shrine and is celebrated for its economical and high-quality agricultural produce."},
    {  name: "Aratumi Market",location: "Iba new site, Ojo.",  info: "Aratunmi Market, while bustling with activity, primarily functions as a compact marketplace. It offers a convenient alternative for sourcing foodstuffs, sparing you the need to travel to Iyana-Iba."},
    {  name: "Arena Market", location: "Bolade Bustop, Agege Motor Road.",info: "Renowned for its extensive array of fashion boutiques, household essentials, and electronics, all available at remarkably discounted rates, this market also stands as the prime destination for curtains, bedding, foodstuffs, fruits, and expert electronics and electrical appliance repair services."},
    {  name: "Bali Market",location: "Broad street, Lagos Island.",  info: "Bali market unquestionably stands out as the premier destination for purchasing second-hand clothing. Here, you can discover high-quality professional attire at budget-friendly prices, including designer items that are significantly more affordable than their original value."},
    {  name: "Balogun Market",location: "Lagos Island.", info: "Balogun Market, nestled near Broad Street, stands as the heart of Lagos Island and a key factor in Lagos's rise as Nigeria's commercial hub. Notably, the market is predominantly run by astute and fashion-forward women who hold significant political influence in Lagos. Balogun is a comprehensive one-stop shopping hub catering to a wide range of needs, offering sections for clothing, groceries, accessories, bridal items, and 'Asoebi' garments for weddings and festive occasions, including thrift stores."},
    {  name: "Bar Beach Market",location: " Elegushi Modern Plaza Lekki Penninsula II Lekki.", info: "The Bar Beach Market offers an array of fresh fish and a limited selection of handicrafts, which may appeal to foreigners, art enthusiasts, and experts. Travelers are often drawn to places like the Bar Beach Market as it is conveniently situated near a variety of hotels, making it easily accessible. Visitors can purchase items such as wood carvings, masks, paintings, bangles, and some food items at this market. The market provides a unique cultural experience that captures the essence of Lagos."},
    {  name: "Bariga Market",location: "Adebayo street, Bariga, Shomolu.",info: "This bustling market offers a diverse range of products, from clothing to food items. Freshly butchered meats of various animals – cows, goats, pigs, and chickens"},
    {  name: "Computer Village",location: "Ikeja.",  info: "Computer Village, the largest technology market in Nigeria and Africa, is primarily occupied by prominent vendors of smartphones, laptops, phone accessories, phone repair services, and SIM activation. This bustling market operates daily, except for Sundays and public holidays."},
    {  name: "Dosunmu Market",location: "Lagos Island.", info: "Dosunmu Market serves as the ideal destination for procuring a wide range of baby essentials and mothercare products, all available at wholesale prices, even when purchasing in smaller quantities. Additionally, the market offers an extensive collection of textiles, cosmetics, as well as a diverse selection of shoes and bags."},
    {  name: "Ebute Ero Market",location: "Ebute Ero.", info: "Ebute Ero, known as such in Yoruba, was historically the main port connecting the island to the Lagos mainland and beyond. Today, it stands as one of Lagos' most bustling markets, specializing in wines, ports, champagne, and non-alcoholic beverages."},
    {  name: "Epe Fish Market", location: "Epe 106101.", info: "The Epe Fish Market is one of the most colourful and fascinating places to purchase crustaceans and freshwater fish. The market also offers exotic animals such as snails, alligators, tortoise etc. Fish on sale can still be found alive and in woven baskets that are held around the market. Chefs who specialize in seafood consider the market their favorite source for all aquatic creatures."},
    {  name: "Idi Oro Market", location: "Oloosa,Idi Oro, Mushin.",  info: "Popularly known as the Plantain market, is your go-to destination for the finest plantains at affordable prices. It caters to both wholesale and retail customers, offering a wide variety of plantains to choose from. Whether you're looking for large or small bunches, dwarf or giant plantains, green or ripe ones, this market has it all. It's the ultimate place for plantain enthusiasts."},
    {  name: "Ijora Olapa Fish Market",location: "Ijora.",  info: "Renowned for its diverse selection of fish, often in large sizes, this market offers fresh fish packaged in cartons as well as live fish, locally referred to as 'Onmi'."},
    {  name: "Iyana-Iba Market",location: "Iyana Iba.", info: "Famous for its affordable food staples such as egusi, crayfish, groundnut oil, palm oil, beans, rice, flour, and a wide range of essential food items. Iyana Iba is also renowned for its incredibly low-priced fresh fruits, making it the go-to market for budget-conscious shoppers in Lagos, particularly those residing along the Badagry Express Road and surrounding areas."},
    {  name: "Ikotun Market",location: "Ikotun.", info: "Ikotun Market, situated in the bustling metropolitan city of Ikotun within Lagos State's Alimosho local government area, is an expansive open-air marketplace. It has gained renown for its value-driven pricing strategy, offering an array of discounted household essentials, ranging from foodstuffs to fresh fruits and vegetables."},
    {  name: "Iddo Market",location: "Ebute-Metta.",  info: "Iddo Market has gained a reputation for its wholesale offerings of staple items such as rice, beans, and groundnut oil. Despite its modest size, it serves as an affordable hub for purchasing various food commodities in bulk."},
    {  name: "Idumota Market",location: "Bankole St, Lagos Island 102273.", info: "Located in the heart of Lagos Island, known as Eko, Idumota Market is one of Nigeria's largest markets, offering an extensive range of products, including textiles, interior decor, jewelry, shoes, bags, and more. If you're a fan of Nollywood movies, you'll also find a variety of the latest films in Idumota."},
    {  name: "Ile Epo Market",location: "Abeokuta Express Way.",  info: "Ile Epo serves as a central hub for various activities, offering an abundance of fresh tomatoes and peppers, as well as bulk quantities of fresh fruits and vegetables, all at remarkably affordable prices. For residents of the Iyana Ipaja and Dopemu areas, this market stands out as the top destination for purchasing high-quality peppers."},
    {  name: "Ita Faji Market", location: "Lagos Island.", info: "Ita Faji is famous for its  affordable meats, thanks to the numerous local butchers who ply their trade within, this market is also a go-to destination for a wide range of household items, including baskets, plastic goods, enamel pans, and an assortment of food products."},
    {  name: "Itunmoja Market", location: "Ikorodu, Ita Elewa.", info: "This market at Ikorodu Town boasts a rich history, dating back as one of the oldest in the area. It remains operational every day. The majority of the items available for purchase here are steeped in tradition, spanning from herbs and ritual materials to beads and artifacts. Interestingly, the market vicinity is home to numerous traditional practitioners who actively participate in spiritual activities, which may shed light on the unique array of products available for sale within its confines."},
    {  name: "Isale Eko Market",location: "Ebute Ero street, Lagos Island.",  info: "This bustling marketplace is your go-to destination for a wide array of products, available both in wholesale and retail quantities. Whether you're in search of wedding gowns, clothing, shoes, bags, or any other item, you'll find it here. Step into the vibrant commercial epicenter of Lagos State, Nigeria, where one of the market scenes comes to life. Within Isale-Eko, notable locations include Iga-Iduganran Street, home to the Oba of Lagos's palace, and Adeniji Adele Road, among a few others."},
    {  name: "Jankarra Market", location: "Idumagbo Road, Lagos Island.", info: "This market serves as a prominent hub for locally crafted and handmade goods. Its offerings encompass tie-dyed fabrics, trade beads, and various jewelry items, alongside pirated cassette tapes, pottery, and a diverse array of clothing articles."},
    {  name: "Ladipo Market",location: "Ladipo Street, Mushin.", info: "Renowned for its position as the primary spare parts market in Nigeria. The market is a hub for mechanics, car owners, and those in search of fairly used cars, spare parts, and phones. One unique feature of this market is the option to purchase fairly used car parts, which provides a budget-friendly alternative for those looking to repair their vehicles. It is often said that if you don’t see the spare part you are looking for in Ladipo market then it is not in Nigeria. People from faraway places source auto spare parts from this populated market. Despite the availability of second-hand parts, the quality of the products is maintained through the expertise of the traders and mechanics in the market."},
    {  name: "Agboju Market",location: "Amuwo Odofin.", info: "This market is a one-stop destination for a diverse array of goods and fresh produce. From a wide range of fresh vegetables, grains, poultry, and fish for preparing delicious meals to an impressive selection of lesser-known vegetables, it's a top choice for fresh produce. Moreover, it offers a comprehensive range of items, including groceries, building materials, clothing, accessories, cosmetics, household goods, and telecommunications gadgets, all available at both retail and wholesale prices, making it a versatile shopping hub."},
    {  name: "Daleko Market",location: "Daleko road, Isolo.", info: "Daleko Market is the chain distribution hub of both local and foreign grains in Lagos State. Goods such as rice, beans, groundnut oil, palm oil, sugar are sold at very reasonable prices."},
    {  name: "Mushin Market",location: "4 Adegbite Ln, Mushin.",info: "Mushin Market stands as a prominent and highly frequented marketplace within Lagos. It encompasses variously sized warehouses, stalls, and open spaces for the display and sale of goods. Shoppers can discover a wide array of household products, including an extensive selection of food items, frozen foods, processed goods, and a diverse range of clothing materials. In essence, Mushin Market offers a comprehensive shopping experience, providing virtually everything one might seek."},
    {  name: "Oyingbo Market",location: "Ebute-Metta.",  info: "One of Lagos State's oldest and largest markets, it's a bustling center for various goods, including fresh produce, affordable meat, textiles, electronics, and household items. It's also known for second-hand clothing. In addition, there are food vendors and eateries offering local delicacies."},
    {  name: "Mile 2 Market",location: "Amuwo Odofin, Festac.", info: "This open-air market is renowned for its wide selection of discounted household items available in retail, ranging from foodstuffs, fruits, vegetables, and yam to groundnut oil and palm oil."},
    {  name: "Mile 12 Market",location: "Ikorodu Rd, Kosofe, Ketu.",info: "For about 30 years, Mile 12 Market in Lagos has been the largest perishable food market in Nigeria and one of the biggest in West Africa. It handles massive daily volumes of foodstuffs, serving as a key distribution hub for Lagos and beyond, playing a vital role in the region's economy and food supply chain."},
    {  name: "Ogba Sunday Market", location: "Wemco Rd, Aguda 101233, Ojodu. ",info: "The Ogba Sunday Market primarily focuses on providing a wide range of food products. It originally operated primarily on weekends, making it convenient for the working-class population to fulfill their shopping needs. In response to increased demand, the market has expanded its operating hours and now welcomes customers daily."},
    {  name: "Ojah Market",location: "19 Fibre Rd, 103101, Badagry.",  info: "Nestled near the Benin Republic border, the market boasts a diverse range of fashion accessories, cosmetics, and a bustling seafood section featuring shrimps, lobsters, prawns, and more. Ojah appeals to both Nigerian and Beninese residents, offering affordable seafood dishes due to its proximity to the fishing industry. Renowned for their smoked fish, Badagry's women contribute to the market's allure, while its proximity to Benin Republic adds a touch of French influence, making it a vibrant mixed market."},
    {  name: "Ojodu Market", location: "Ojodu Berger.", info: "Ojodu market is renowned for offering discounted household items, including fresh vegetables, food essentials, stylish shoes, fashionable bags, and a selection of electronics. It caters to a diverse range of shoppers, providing a budget-friendly and comprehensive shopping experience for residents and visitors alike."},
    {  name: "Oke Odo Market",location: "Agbado Oke Odo.",  info: "Established in 1983 by the Ikeja Local Government Area Council, this market is a collective of traders from neighboring towns and farms. It is renowned for its diverse range of foodstuffs, including yams, garri, beans, palm oil, pepper, tomatoes, vegetables, fish, meats, onions, and various grains such as millet, wheat, rice, sorghum, maize, and groundnuts."},
    {  name: "Oniru New Market",location: "Oniru, Victoria Island.",info: "New Oniru Market stands as a prominent urban marketplace, offering a wide array of products encompassing groceries, apparel, building materials, and electrical appliances. While it may not be the most budget-friendly option, it boasts exceptional accessibility, making it a convenient choice for shoppers."},
    {  name: "Vespa Market",location: "Ijanikin, Ojo.",info: "Vespa Market is renowned for its collection of affordable foreign shoes and bags. Whether you're a reseller or in need of personal items, this Lagos-based market is a prime destination to discover enticing deals on footwear and handbags. However, it's essential to note that road access to the market may be challenging due to ongoing construction. To make the most of your visit, consider checking the days when new shipments arrive to ensure a satisfying shopping experience."},
    {  name: "Oshodi Market",location: "Oshodi.", info: "Following the demolition of the old Owonifari location, the market has been relocated to Isopakodowo. The new market comprises over 600 shops and hundreds of kee Clamps, accommodating Asoebi marketers, foodstuffs sellers, and fruit sellers."},
    {  name: "Téjúoshó Market", location: "Ojuelegba-Itire Road, Yaba.",  info: "Tejuosho Market stands as a contemporary, state-of-the-art marketplace. In the past, it was a traditional middle-class market known for its competitive pricing. Within Tejuosho Market, you'll discover an extensive range of items catering to your domestic, personal, and business requirements, including clothing, jewelry, and various food products."},
    {  name: "Sangotedo Market",location: "Sangotedo.", info: "Sangotedo Market may not be the most budget-friendly option for purchasing food items, but it offers a unique and engaging experience for those who relish the art of bargaining and love exploring a diverse range of culinary products. This community-based market is perfect for a quick stop to stock up on essentials like meat, vegetables, condiments, building materials and local ingredients. Skillful haggling often leads to significant discounts on various goods."},
    {  name: "Kajola Plank Market",location: "Iganmu Amukoko.",  info: "This open market is widely recognized for its discounted building planks, which encompass a variety of types such as Afara, Apepe, Araba, Idingbo, Mahogany, 2 BY 2, 4 BY 4, Millainah, Orin Dudu, Okedo, Sindarella, and various other building materials."},
    {  name: "Katangua Market", location: "Abule Egba.",info: "Frequently referred to as the 'bend-down-select market' Katangua Market offers a diverse array of clothes and shoes in varying conditions. It's a go-to destination for budget-conscious shoppers seeking second-hand clothing and household items. Notably, Mondays, Wednesdays, and Fridays mark the arrival of fresh consignments to the market."},
    {  name: 'Akodo Market',  location: "Lekki Free Trade Zone Rd, Lekki.",  info: "Located near the Dangote Refinery, Akodo Market is a quaint and charming marketplace. While it offers a wide array of ingredients for preparing traditional local meals, it may not stock some items required for international cuisine. This limitation is attributed to its rural setting."},
    {  name: 'Apongbon Market',  location: "55 Apongbon St, Lagos Island 102273.",  info: "Apongbon Underbridge in Lagos is a large and organized market offering a wide variety of affordable products, including groceries, household items, clothing, accessories, and jewelry, both local and imported. While evening traffic can be problematic due to road conditions, the market remains well-structured. It's known for budget-friendly options in food and clothing. Caution is advised at night, but during the day, it's a bustling hub with competitive wine prices."},
    {  name: 'Lekki Arts & Crafts Market',  location: "Oba Elegushi St, Lekki Penninsula.",  info: "The Lekki Art Market, also known as Jakande Art Market or Oba Elegushi International Market, is a hidden gem along the Lekki-Epe expressway. Despite its unassuming exterior, this well-organized marketplace offers a diverse collection of art and crafts, including leather goods, paintings, sculptures, textiles, raffia crafts and more. Most of the items are crafted by Nigerian artists, with some originating from other West African countries. Visitors can also engage with craftsmen to learn about the art-making process, making it a culturally rich and educational experience."},
    {  name: 'Liverpool Under-Bridge Market',  location: '4 Apapa Oworonshoki Expy, Apapa 102272.', info: "Also known as liverpool crayfish market, this market is easy to find because it is near to the famed Tincan Island in Apapa as well as Creek Road. This market specializes in both fresh and dried fish. As a result of the nearby seaports, it is a relatively large market with different foodstuff for sale."},
    {  name: 'Makoko Asejire Market', location: 'A Lagoon in Lagos.', info: "Situated on an elevation of about 4 meters above sea level, This is a community on water and land so their main occupation is fishing. There are lots of fresh and live fish for sale. You will find different varieties like white Cat fish, Tilapia fish,Sniper fish, Shiny-nose, Red-snapper, Prawns, Crab, Barracuda Fish and more in different sizes. You can also get Smoked Fish there."},
    {  name: 'Pelewura Market', location: 'Lagos Island.', info: "At Pelewura Market, you can purchase a wide variety of items, including textiles, interior decor, jewelry, shoes, bags, and more, all at very affordable prices."},
    {  name: 'Rauf Aregbesola Market',   location: 'Iyana Ipaja.. ', info: "Rauf Aregbesola Market is an expansive open-air marketplace, renowned for offering discounted household items such as fruits, vegetables, food essentials, secondhand clothing, snacks, provisions, and beverages."},
    {  name: 'Sandgrouse Market',  location: 'Sura Road, Simpson Street', info: "Sandgrouse Market is more or less like a mall. It has been transformed into a modern, mixed-use facility that closely resembles a mall. Here, you can find a diverse selection of imported goods."},
    {  name: "Odunade Market",location: "2 Balogun St, Amukoko 100009.",  info: "Odunade Market, strategically situated in Lagos, offers a wide selection of building materials at competitive wholesale and retail prices. The market is renowned for its high probability of providing top-quality materials at affordable rates."},
    {  name: "Ojuwoye Market",location: "3 Abolade St, Mushin 102215.",  info: "Ojuwoye Market in Mushin, Lagos, is a renowned and affordable hub for various businesses, offering a wide range of bulk products. It holds the status of one of Lagos State's leading wholesale markets and is strategically located with essential facilities nearby. While the market provides security, caution is advised due to challenging road conditions, especially during the rainy season."},
    {  name: "White Sands Market", location: "Isalo Eko, Lagos Mainland.", info: "This bustling market, serves as a major hub for a wide array of food-related products. Farmers from various regions of Nigeria flock to this market to supply goods in large quantities. It also attracts numerous smaller markets scattered throughout Lagos, all seeking to make wholesale purchases. Here, you can find a remarkable range of items at remarkably low prices, including various types of yams, garri, vegetables, fruits, crayfish, smoked fish, and periwinkles."},
    {  name: "Ladipo Paper Market",location: "5 Balogun St, Papa Ajao 102215, Mushin.",info: "Ladipo Paper Market, located in Mushin, has gained fame as a comprehensive marketplace for all things related to printing and printing materials, with paper being just one facet. It serves as a hub for various design and printing services, including Direct Image, Large Format, graphic design, and impressions, all offered at budget-friendly rates. Furthermore, you can find a wide array of printing materials here. The shops in this market are independently owned, varying in size and the sophistication of their printing equipment."},
    {  name: "Aswani Market",location: " Osolo Way, Isolo 102214.",info: "Reputed for selling fairly used items at ridiculously cheap prices. Clothing items, for instance popularly known as 'Okrika', 'gbogbo', or 'bend down select', can be purchased for as low as 200 NGN. The market also has traders selling new clothing items per yard, bags, shoes, underwears, and even foodstuffs. One can even get damaged electrical equipment or tools fixed for as low as 500 NGN. Aswani market is open every day of the week, but Mondays are designated for shoes and bags sales."},
    {  name: "Leather Market",location: "4 Adegbite Ln, Mushin 102215.",  info: "Leather Market, situated within the bustling Mushin Market, stands as one of Nigeria's prominent hubs for leather goods. While it may be smaller in size compared to markets in Aba, Kano, and Onitsha, it offers an extensive range of raw leather products. Here, you can explore various types of leather, including animal skin leather, faceless leather, suede leather, and much more. Moreover, the chances of discovering high-quality, locally crafted luxury leather items are remarkably high."},
    {  name: "Yaba Market",location: "Ojuelegba Road, Yaba.",  info: "Yaba Market, located on Lagos Mainland, is a hub for a wide range of fashion items, including clothing, accessories, and secondhand apparel. It offers budget-friendly options and competes with Tejousho Market in terms of product variety and affordability. Catering to a youthful clientele, Yaba Market attracts shoppers from the densely populated area known for its numerous educational institutions."},
    {  name: "Cele Market",location: "Cele Bus Stop Oshodi/Apapa Expressway.",  info: "Cele Night Market as it is popularly known, transforms into a bustling hub for second-hand goods trading, such as 'bend down select' and 'okrika' in the evening. This location attracts street traders, including those displaced from Oshodi, offering various products like clothing, accessories, electronics, and household items. The market's growth has led to pedestrian congestion on both sides of the road."},
    {  name: "Ijesha Market",location: "26 Iseyin St, Lawanson.",  info: "This community market provides a wide range of products, including food items, home appliances, clothing, and various services like labor, transportation, and welding. Operating from 7:00 AM to 8:00 PM daily, it offers convenience but can be crowded, with limited parking and many vendors occupying the roadside."},
    {  name: "Agege Market",location: "48,Oniwaya street,Off Capitol Road, Agege.",  info: "The bustling Agege main market is a vibrant hub where you can find an extensive range of products, from essential food items and herbs to quality shea butter, fabrics, and a variety of beverages. With competitive prices for both retail and wholesale purchases, it caters to diverse shopping needs. Moreover, within the vicinity, you'll also discover the Abbatoir meat market, offering additional options and contributing to the area's vibrant commercial landscape."},
    {  name: "Owode Onirin Market",location: "Ikorodu Road, Erunkan.",  info: "Owode Onirin Auto Spare Parts Market, located past Mile 12 on Ikorodu Road, distinguishes itself from Ladipo Auto Spare Parts Market by exclusively offering Nigerian used products. It specializes in refurbishing damaged metals and also features a section for damaged vehicles and fairly used cars. Established in the 1980s, it's one of Nigeria's oldest auto spare parts markets, providing spare parts for various vehicle brands like Peugeot, Audi, Mitsubishi, Toyota, Ford, Honda, and Volkswagen."},
    {  name: "Amu Market",location: "Amu Street, Olorunsogo Bus stop, Mushin. ",  info: "Amu Timber Market is a valuable resource for woodworking and interior decor materials, offering a wide range of competitively priced items, such as glass, glasswork accessories, and roofing planks. It serves as a comprehensive destination for all your wood and timber-related building requirements. Whether you're in search of MDF/HDF, imported or domestic doors, tiles, glass, PVC ceiling, suspended PVC, POP, or POP materials, you'll find a diverse selection of the latest trends and abundant choices."},
    {  name: "Onipanu Rod Market",location: "Latude, Labinjo St, Somolu.",  info: "Onipanu rod market is a well-organized and secure hub for mild/galvanized steel products, operating from 8 am to 6 pm. It also offers limited roadside shopping for household items and food. The market follows a unique three-location system, with one section open all week behind the Onipanu police station. Saturdays see business conducted on Watchtower Road. Livestock and some food items available only on weekends."},
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
    Markets play a pivotal role in our lives, acting as community heroes and underlining their importance in the fabric of an economy. They foster connections, support local businesses, and ensure food security.\nEmbark on a cosmic adventure to explore Lagos city's markets among the stars and discover their unique and captivating characteristics.\nClick a star. Move a star. Either way, they have something to say.\nHappy exploring! 
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

