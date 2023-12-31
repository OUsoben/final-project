import  i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"


i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
    resources : {
        en: {
            translation: {
                Homepage :{
                    title : "Beautiful Sneaker Nike",
                    heading1: "SPORTS SHOES",
                    heading2 : "GET UP TO 30% OFF",
                    heading3 : " ALL SPORTS SHOES",
                    heading4 : "what are you looking for",
                    btn1 : "Shopping now",
                    menu1 : "Men's",
                    menu2 : "Women's",
                    menu3 : "Kid's",
                    menu4 : "Water Sport",
                    menu5 : "Swimwear",  
                    heading5 :  "Don't wait for  anything. Buy it today!",
                    p1 : "Let's enjoy with our store",
                    p2 : "The sport store is the great choice to yours  that eazier to yourself to get everything you need...! less time to buy and have it all you want to buy.Sign in for faster checkout and earn one Point for every $1 spent at our family of brands! 300 Points = $10 Reward. ",
                    heading6 : "First-class materials and  innovative technologies " ,
                    p3 : " Quality doesn’t have to be expensive! Being sports enthusiasts ourselves we know about the importance of high-quality sports equipment. That’s why we regularly offer low-priced sportswear by famous manufacturers. Comfortable shorts, breathable shoes, windproof tracksuit jackets – we have them all! And you don’t have to go without your favourite brand. We list adidas, Nike and PUMA but also Reebok, Lonsdale and Dunlop. Our range of products is huge, and we permanently add new products.",
                    heading7 : "Shoes",
                    btn2 : "View all"
                    
                } , 
                Footer : {
                    title1 : "MEM",
                    title2 : "WOMEN",
                    title3 : "KID",
                    li1: "Jeans",
                    li2: "Jumpers",
                    li3 : "Leather",
                    li4 : "Shorts",
                    li5: "Boots",
                    li6 : "Watches",
                    li7: "Dresses",
                    li8: "Jumpsuits",
                    li9: "Shirts",
                    li10: "T-shirts",
                    li11: "Jackets",
                    li12 : "Polos",
                    li13: "Sweatshirt",
                    li14: "Sweater",
                    heading1: "FOLLOW US",
                    heading2 : "SUBSCRIBE US",
                    btn1 : "Subscribe",
                    placeholder : "Enter Email Address"
                },
                Servicepage : {
                    p1: "We are care all of you to get more sport products . you come to the right place our shop has more everything what you want to buy come and get it today.At the sport store, we believe that exceptional customer service is not just a commitment it's a promise we uphold with every interaction.  Whether you have questions about our products, need recommendations, or want to learn more, our team is here to provide you with the information you seek.",
                    heading1: "We'll provide the best service and Quality of the products",
                    heading2 :"services",
                    p2: "All The service Provided by us",
                    h1: "LOGISTIC",
                    p3: "it is a long estimated.",
                    h2:"TRANSPORT",
                    h3: "WAREHOUSING",
                    h4 : "PACKAGING",
                    h5: "DOOR TO DOOR",
                    h6: "CARGO",
                    heading3: "If you have any Questions or Recommendations",
                    p4: "Please drop your comments down below",
                    heading4: "Comments",
                    btn1 : "Send",
                    btn2: "reset"
                },
                AboutUsPage: { 
                    h1: "About us",
                    p1:"Welcome to our sports store, where passion meets performance!",
                    h2: "About Our Sports Store",
                    p2: " Welcome to The sport store, your one-stop destination for all your    sports and fitness needs! At The sport store , we are passionate       about helping you achieve your athletic goals by providing  top-quality sports gear and accessories. Let me take you on a brief   journey through what makes us stand out. At our store, we are    dedicated to providing high-quality sports gear and equipment to      athletes of all levels. Whether you're a professional athlete or aweekend warrior, we have the gear you need to succeed.",
                    h3: "Our Mission",
                    p3: "At The Sport Store, our mission is to empower individuals on their journey to a healthier, more active lifestyle. We strive to be more   than just a sports store; we aim to be a catalyst for personalgrowth, community engagement, and athletic excellence. Our mission is to inspire and empower people to lead active and healthylifestyles through the joy of sports. We believe in the transformative power of sports and aim to make quality sports equipment accessible to everyone.",
                    h4: "Our Team",
                    p4:" Explore our wide range of products, including athletic apparel,footwear, accessories, and more. Our knowledgeable staff is here to  help you find the perfect gear to elevate your game.",
                    h5: "Mr.Elon Musk",
                    h6: "CEO, Founder",
                    p5 :"   Hello, The sport Store community! This is Elon Musk , and I am  incredibly excited to connect with you today as the CEO of our   beloved sports store. At the Sport store, our mission goes beyond  simply providing sports gear — we are dedicated to empowering each  of you on your unique journey to a healthier, more active   lifestyle.As we look ahead, our focus remains on innovation, customer satisfaction, and community engagement. I can't wait to  share more details with you soon.",
                    h7: "FOLLOW ME",
                    h8 : "Mr.Ben",
                    h9: "Developer",
                    p6 : " Hello, everyone! I'm Ben, and I'm thrilled to connect with you today  as a developer. Whether you're a fellow coder, a client, or just  someone interested in the tech world, I'm excited to share a bit about what I do and the passion that drives me."
                },
                Navbar : {
                    title1: "Home",
                    title2: "Services",
                    title3: " Products",
                    title4: "About Us",
                    title5: "Dashboard",
                    imageUrl: "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
                }
            }
        }
        , 
        kh : {
            translation : {
                Homepage :{
                    title : "ស្បែកជើង Nike ដ៏ស្រស់ស្អាត",
                    heading1: "ស្បែកជើងកីឡា",
                    heading2 : "ទទួលបានការបញ្ចុះតម្លៃរហូតដល់ 30%",
                     heading3 : " ស្បែកជើងកីឡាទាំងអស់។",
                     heading4 : "តើ​អ្នក​កំពុង​រក​អ្វី",
                     btn1 : "ទិញទំនិញឥឡូវនេះ",
                     menu1 : "របស់បុរស",
                     menu2 : "របស់ស្ត្រី",
                     menu3 : "របស់ក្មេង",
                     menu4 : "កីឡាទឹក",
                     menu5 : "ឈុតហែលទឹក",  
                     heading5 : "កុំរង់ចាំអ្វីទាំងអស់។ ទិញថ្ងៃនេះ!",
                     p1 : "សូមរីករាយជាមួយហាងយើងខ្ញុំ",
                     p2 : " ហាងកីឡាគឺជាជម្រើសដ៏ល្អសម្រាប់លោកអ្នក ដែលកាន់តែងាយស្រួលសម្រាប់ខ្លួនអ្នកក្នុងការទទួលបានអ្វីគ្រប់យ៉ាងដែលអ្នកត្រូវការ...! ចំណាយពេលតិចក្នុងការទិញ និងមានវាទាំងអស់ដែលអ្នកចង់ទិញ។ ចូលដើម្បីទូទាត់ប្រាក់កាន់តែលឿន និងទទួលបានពិន្ទុមួយសម្រាប់រាល់ $1 ដែលបានចំណាយនៅគ្រួសារម៉ាករបស់យើង! 300 ពិន្ទុ = $10 រង្វាន់។",
                     heading6 :  "សម្ភារៈថ្នាក់ដំបូង និងបច្ចេកវិទ្យាច្នៃប្រឌិត",
                     p3 : "គុណភាពមិនបាច់ថ្លៃទេ! ក្នុងនាមជាអ្នកចូលចិត្តកីឡា យើងដឹងអំពីសារៈសំខាន់នៃសម្ភារៈកីឡាដែលមានគុណភាពខ្ពស់។ នោះហើយជាមូលហេតុដែលយើងផ្តល់ជូននូវសម្លៀកបំពាក់កីឡាតម្លៃទាបជាទៀងទាត់ដោយក្រុមហ៊ុនផលិតល្បីៗ។ ខោខ្លីស្រួលពាក់ ស្បែកជើងខ្យល់ អាវក្រោះការពារខ្យល់ - យើងមានវាទាំងអស់! ហើយអ្នកមិនចាំបាច់ទៅដោយគ្មានម៉ាកដែលអ្នកចូលចិត្តទេ។ យើងរាយបញ្ជី adidas, Nike និង PUMA ប៉ុន្តែក៏មាន Reebok, Lonsdale និង Dunlop ផងដែរ។ ជួរនៃផលិតផលរបស់យើងមានទំហំធំ ហើយយើងបន្ថែមផលិតផលថ្មីជាអចិន្ត្រៃយ៍។",
                     heading7 : "ស្បែកជើង",
                    btn2 : "មើលទាំងអស់",
                  

                },
                Footer: {
                    title1 :  "បុរស",
                    title2 : "ស្រ្តី",
                    title3 : "កុមារ",
                    li1 :"ខោ​ខូ​វ​ប៊​យ",
                    li2 : "អាវដៃវែង",
                    li3 : "ស្បែក",
                    li4 : "ខោខ្លី",
                    li5 : "ស្បែកជើងកវែង",
                    li6: "នាឡិកា",
                    li7: "រ៉ូប",
                    li8: "ឈុតខោ",
                    li9: "អាវ",
                    li10 : "អាវយឺត",
                    li11: "អាវ",
                    li12 : "ប៉ូឡូ",
                    li13: "អាវយឺត",
                    li14: "អាវយឺត",
                    heading1: "តាម​ពួក​យើង",
                    heading2 : "ជាវពួកយើង",
                    btn1 : "ជាវ",
                    placeholder : "បញ្ចូលអាសយដ្ឋានអ៊ីមែល"
                },
                Servicepage: {
                    p1: "យើងយកចិត្តទុកដាក់ចំពោះអ្នកទាំងអស់គ្នាដើម្បីទទួលបានផលិតផលកីឡាបន្ថែមទៀត។ អ្នកមកទីតាំងត្រឹមត្រូវ ហាងយើងខ្ញុំមានអ្វីៗជាច្រើនទៀតដែលអ្នកចង់ទិញ សូមអញ្ជើញមក ហើយទទួលបានវានៅថ្ងៃនេះ។ នៅហាងកីឡា យើងជឿថាសេវាកម្មអតិថិជនពិសេសមិនគ្រាន់តែជាការប្តេជ្ញាចិត្តប៉ុណ្ណោះទេ វាគឺជាការសន្យាដែលយើងប្រកាន់ខ្ជាប់នូវរាល់អន្តរកម្ម។ មិនថាអ្នកមានសំណួរអំពីផលិតផលរបស់យើង ត្រូវការការណែនាំ ឬចង់ស្វែងយល់បន្ថែមទេ ក្រុមរបស់យើងនៅទីនេះដើម្បីផ្តល់ឱ្យអ្នកនូវព័ត៌មានដែលអ្នកស្វែងរក។",
                    heading1: "ពួកយើងនឹងផ្តល់សេវាកម្មល្អបំផុត និងគុណភាពនៃផលិតផល",
                    heading2 : "សេវាកម្ម",
                    p2: "សេវាកម្មទាំងអស់ដែលផ្តល់ដោយយើង",
                    h1: "ឡូជីស្ទីក",
                    p3: "វាជាការប៉ាន់ស្មានដ៏យូរ។",
                    h2: "ការដឹកជញ្ជូន",
                    h3: "ឃ្លាំង",
                    h4: "ការវេចខ្ចប់",
                    h5: "ផ្ទះ​មួយ​ទៅផ្ទះ​មួយ",
                    h6: "ឡានដឹកទំនិញ",
                    heading3: "ប្រសិនបើអ្នកមានសំណួរ ឬអនុសាសន៍ណាមួយ",
                    p4: "សូមទម្លាក់មតិរបស់អ្នកនៅខាងក្រោម",
                    heading4: "មតិយោបល់",
                    btn1: "ផ្ញើរ",
                    btn2: "កំណត់ឡើងវិញ"
                },
                AboutUsPage: { 
                    h1: "អំពីយើង",
                    p1:"សូមស្វាគមន៍មកកាន់ហាងកីឡារបស់យើង ដែលចំណង់ចំណូលចិត្តជួបនឹងការសម្តែង!",
                    h2: "អំពីហាងកីឡារបស់យើង",
                    p2: "សូមស្វាគមន៍មកកាន់ហាងកីឡា ដែលជាគោលដៅតែមួយគត់របស់អ្នកសម្រាប់តម្រូវការកីឡា និងកាយសម្បទាទាំងអស់របស់អ្នក! នៅហាងកីឡា យើងមានទឹកចិត្តក្នុងការជួយអ្នកឱ្យសម្រេចបាននូវគោលដៅកីឡារបស់អ្នកដោយផ្តល់នូវឧបករណ៍ និងសម្ភារៈកីឡាគុណភាពខ្ពស់បំផុត។ ខ្ញុំសូមនាំអ្នកធ្វើដំណើរខ្លីៗតាមរយៈអ្វីដែលធ្វើឱ្យយើងលេចធ្លោ។ នៅហាងរបស់យើង យើងប្តេជ្ញាផ្តល់ឧបករណ៍ និងឧបករណ៍កីឡាដែលមានគុណភាពខ្ពស់ដល់អត្តពលិកគ្រប់កម្រិត។ មិនថាអ្នកជាអត្តពលិកអាជីព ឬអ្នកចម្បាំងចុងសប្តាហ៍ យើងមានឧបករណ៍ដែលអ្នកត្រូវការដើម្បីជោគជ័យ។",
                    h3: "បេ​សកម្ម​របស់​យើង",
                    p3: "នៅហាងកីឡា បេសកកម្មរបស់យើងគឺផ្តល់អំណាចដល់បុគ្គលម្នាក់ៗក្នុងការធ្វើដំណើររបស់ពួកគេទៅកាន់របៀបរស់នៅដែលមានសុខភាពល្អ និងសកម្មជាងមុន។ យើងខិតខំដើម្បីក្លាយជាជាងគ្រាន់តែជាហាងកីឡាមួយយើងមានគោលបំណងដើម្បីក្លាយជាកាតាលីករសម្រាប់ការលូតលាស់ផ្ទាល់ខ្លួន ការចូលរួមក្នុងសហគមន៍ និងឧត្តមភាពផ្នែកកីឡា។ បេសកកម្មរបស់យើងគឺដើម្បីបំផុសគំនិត និងផ្តល់អំណាចដល់មនុស្សឱ្យដឹកនាំរបៀបរស់នៅសកម្ម និងមានសុខភាពល្អតាមរយៈភាពរីករាយនៃកីឡា។ យើងជឿជាក់លើថាមពលផ្លាស់ប្តូរនៃកីឡា និងមានបំណងធ្វើឱ្យឧបករណ៍កីឡាមានគុណភាពអាចចូលប្រើបានសម្រាប់មនុស្សគ្រប់គ្នា។",
                    h4: "ក្រុម​របស់​យើង",
                    p4:"ស្វែងរកផលិតផលជាច្រើនរបស់យើង រួមទាំងសម្លៀកបំពាក់កីឡា ស្បែកជើង គ្រឿងប្រើប្រាស់ និងច្រើនទៀត។ បុគ្គលិកដែលមានចំណេះដឹងរបស់យើងនៅទីនេះដើម្បីជួយអ្នកស្វែងរកឧបករណ៍ដ៏ល្អឥតខ្ចោះដើម្បីលើកកម្ពស់ហ្គេមរបស់អ្នក។",
                    h5: "លោកអេឡុនម៉ាស៏",
                    h6: "នាយកប្រតិបត្តិ, ស្ថាបនិក",
                    p5 : "ជំរាបសួរសហគមន៍ហាងកីឡា! នេះគឺជា លោកអេឡុនម៉ាស៏ ហើយខ្ញុំពិតជារំភើបយ៉ាងខ្លាំងក្នុងការភ្ជាប់ទំនាក់ទំនងជាមួយអ្នកនៅថ្ងៃនេះក្នុងនាមជានាយកប្រតិបត្តិនៃហាងកីឡាជាទីស្រឡាញ់របស់យើង។ នៅហាង Sport បេសកកម្មរបស់យើងលើសពីការផ្តល់នូវឧបករណ៍កីឡា — យើងឧទ្ទិសដល់ការផ្តល់អំណាចដល់អ្នកម្នាក់ៗក្នុងដំណើរតែមួយគត់របស់អ្នកទៅកាន់របៀបរស់នៅដែលមានសុខភាពល្អ និងសកម្មជាងមុន។ នៅពេលដែលយើងមើលទៅខាងមុខ ការផ្តោតអារម្មណ៍របស់យើងនៅតែផ្តោតលើការច្នៃប្រឌិត ការពេញចិត្តរបស់អតិថិជន និងសហគមន៍។ ការចូលរួម។ ខ្ញុំមិនអាចរង់ចាំក្នុងការចែករំលែកព័ត៌មានលម្អិតបន្ថែមជាមួយអ្នកក្នុងពេលឆាប់ៗនេះទេ។" ,
                    h7: "តាម​ខ្ញុំ",
                    h8 : "លោកសុបិន្ត",
                    h9: "អ្នកអភិវឌ្ឍន៍",
                    p6: "ជំរាបសួរ​អ្នក​រាល់​គ្នា! ខ្ញុំ​គឺ Ben ហើយ​ខ្ញុំ​ពិត​ជា​រំភើប​ក្នុង​ការ​ភ្ជាប់​ទំនាក់ទំនង​ជាមួយ​អ្នក​ក្នុង​នាម​ជា​អ្នក​អភិវឌ្ឍន៍​ម្នាក់​ក្នុង​ថ្ងៃ​នេះ។ មិនថាអ្នកជាអ្នកសរសេរកូដ អតិថិជន ឬគ្រាន់តែជាអ្នកចាប់អារម្មណ៍លើពិភពបច្ចេកវិទ្យា ខ្ញុំមានសេចក្តីរំភើបរីករាយក្នុងការចែករំលែកបន្តិចអំពីអ្វីដែលខ្ញុំធ្វើ និងចំណង់ចំណូលចិត្តដែលជំរុញខ្ញុំ។"
                },
                Navbar : {
                    title1: "ផ្ទះ",
                    title2: "សេវាកម្ម",
                    title3: " ផលិតផល",
                    title4: "អំពីពួកយើង",
                    title5: "ផ្ទាំងគ្រប់​គ្រង",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Flag_of_Cambodia_%28type_2%29.svg/2560px-Flag_of_Cambodia_%28type_2%29.svg.png"
                }
            }
        },
        jp : {
            translation : {
                Homepage:{
                    title: "美しいスニーカーナイキ",
                    heading1: "スポーツシューズ",
                    heading2: "最大 30 割引",
                    heading3 : " オールスポーツシューズ",
                    heading4 : "何を探していますか",
                    btn1 : "今すぐショッピング",
                    menu1 : "男性用",
                    menu2 : "婦人向け",
                    menu3 : "子供の",
                    menu4 : "ウォータースポーツ",
                    menu5 : "水着", 
                    heading5 : "何も待たないでください。 今すぐ購入してください!",
                    p1 : "当店と一緒に楽しみましょう",
                    p2 : "スポーツ ストアは、必要なものをすべて簡単に手に入れることができる、最適な選択肢です。 購入にかかる時間が短縮され、買いたいものがすべて手に入ります。より迅速なチェックアウトのためにサインインすると、当社のブランド ファミリーでの支払い 1 ドルごとに 1 ポイントを獲得できます。 300 ポイント = 10 ドルの報酬。",
                    heading6 : "一流の素材と革新的なテクノロジー",
                    p3 : "品質は高価である必要はありません。 私たち自身もスポーツ愛好家なので、高品質のスポーツ用品の重要性を知っています。 そのため、有名メーカーのスポーツウェアを定期的に低価格でご提供しております。 快適なショーツ、通気性の高いシューズ、防風性のあるトラックスーツ ジャケット、すべて揃っています。 お気に入りのブランドなしで過ごす必要はありません。 アディダス、ナイキ、プーマだけでなく、リーボック、ロンズデール、ダンロップもリストアップしています。 当社の製品範囲は膨大であり、常に新製品を追加しています。",
                    heading7 : "靴",
                    btn2 : "すべて見る"
                    
                },
                Footer: {
                    title1 : "男性",
                    title2 : "女性",
                    title3 : "子供",
                    li1 : "ジーンズ",
                    li2 : "ジャンパー",
                    li3 : "レザー",
                    li4 : "ショーツ",
                    li5: "ブーツ",
                    li6: "時計",
                    li7 : "ドレス",
                    li8: "ジャンプスーツ",
                    li9: "シャツ",
                    li10: "Tシャツ",
                    li11: "ジャケット",
                    li12 : "ポロ" ,
                    li13: "トレーナー",
                    li14: "セーター",
                    heading1 : "私たちに従ってください",
                    heading2 : "購読してください",
                    btn1 : "購読する",
                    placeholder : "メールアドレスを入力してください"
                },
                Servicepage : {
                    p1: "私たちは皆様がより多くのスポーツ製品を手に入れることを心掛けています。 あなたはそこに来ます   正しい場所にある当店には、あなたが購入したいものがすべて揃っています。 スポーツ ストアでは、優れた顧客サービスは単なる約束ではなく、あらゆるやり取りにおいて守る約束であると信じています。 当社の製品についてご質問がある場合でも、推奨事項が必要な場合でも、さらに詳しく知りたい場合でも、当社のチームがお客様が求める情報を提供いたします。",
                    heading1 : "最高のサービスと製品の品質を提供します",
                    heading2 : "サービス",
                    p2: " 当社が提供するすべてのサービス",
                    h1: "物流",
                    p3: "それは長い推定です。",
                    h2: "輸送",
                    h3: "倉庫保管",
                    h4: "梱包",
                    h5: "ドアへの扉",
                    h6: "貨物",
                    heading3 :"ご質問やご提案がございましたら",
                    p4: "コメントを下にドロップしてください",
                    heading4 : "コメント",
                    btn1: "送信",
                    btn2: "リセット"
                },
                AboutUsPage: { 
                    h1: "私たちについて",
                    p1:"情熱とパフォーマンスが出会うスポーツ ストアへようこそ!",
                    h2:"スポーツストアについて",
                    p2: "スポーツやフィットネスのあらゆるニーズをワンストップで満たすスポーツ ストアへようこそ! スポーツ ストアでは、最高品質のスポーツ ギアとアクセサリーを提供することで、お客様の運動目標の達成を支援することに情熱を注いでいます。 当社の特徴を簡単に説明します。 当店では、あらゆるレベルのアスリートに高品質のスポーツギアや用具を提供することに専念しています。 あなたがプロのアスリートであっても、週末の戦士であっても、成功するために必要なギアが揃っています。",
                    h3: "我々の使命",
                    p3: "The Sport Store の使命は、個人がより健康でよりアクティブなライフスタイルへの道を歩めるように支援することです。 私たちは単なるスポーツ店を超えた存在となるよう努めています。 私たちは、個人の成長、コミュニティへの参加、運動能力の向上の触媒となることを目指しています。 私たちの使命は、スポーツの楽しさを通じて、人々がアクティブで健康的なライフスタイルを送れるようにインスピレーションを与え、力を与えることです。 私たちはスポーツの変革力を信じており、高品質のスポーツ用品を誰もが利用できるようにすることを目指しています。",
                    h4: "私たちのチーム",
                    p4:"スポーツアパレル、シューズ、アクセサリーなどを含む当社の幅広い製品をご覧ください。 知識豊富なスタッフが、あなたのゲームを向上させるのに最適なギアを見つけるお手伝いをいたします。",
                    h5: "イーロン・マスク氏",
                    h6: "CEO、創設者",
                    p5: "こんにちは、スポーツストアコミュニティです! イーロン・マスクです。今日、私たちの愛するスポーツ店の CEO として皆様とお会いできることを大変うれしく思っています。 スポーツ ストアでは、私たちの使命は単にスポーツ用品を提供することにとどまりません。私たちは、お客様一人ひとりがより健康でよりアクティブなライフスタイルへの独自の旅を支援することに専念しています。私たちは将来を見据えて、引き続きイノベーション、顧客満足度、コミュニティに焦点を当てています。 婚約。 近々詳細をお知らせできるのが待ちきれません。",
                    h7: "私に従ってください",
                    h8 : "ベンさん",
                    h9: "開発者",
                    p6: "こんにちは、みんな！ 私はベンです。開発者として今日皆さんとお会いできることを大変うれしく思っています。 あなたがプログラマー仲間でも、クライアントでも、あるいはテクノロジーの世界に興味があるだけでも、私の仕事と私を動かす情熱について少し共有できることを嬉しく思います。"

                },
                Navbar : {
                    title1: "家",
                    title2: "サービス",
                    title3: " 製品",
                    title4: "私たちについて",
                    title5: "ダッシュボード",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7M92yeHBoGh3KZWFuHVBPKnnYqBP5vOM44Q&usqp=CAU"
                }
            }
        }

    }
})