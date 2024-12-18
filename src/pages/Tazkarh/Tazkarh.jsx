import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSurrah } from "../../Redux/Surrah";
import Loader from "../../compnents/Loader/Loader";
import Ayah from "./../../compnents/Ayah/Ayah";

export default function Tazkarh() {
  const dispatch = useDispatch();
  // Name of surrah that will send as prop to Aya component
  const [surrah, setSurrah] = useState('');
  // Array of Aya that contain many information about aya that get from api
  const [ayah, setAyah] = useState([]);
  // Making number Random Surrah  form 1 to 114 that passing to Link of apit to get surrah
  const [randomSurrah, setRandomSurrah] = useState(Math.floor(Math.random() * 114) + 1); 
// Array of naming all surrah in quran
  const surahs = [
    "الفاتحة",
    "البقرة",
    "آل عمران",
    "النساء",
    "المائدة",
    "الأنعام",
    "الأعراف",
    "الأنفال",
    "التوبة",
    "يونس",
    "هود",
    "يوسف",
    "الرعد",
    "إبراهيم",
    "الحجر",
    "النحل",
    "الإسراء",
    "الكهف",
    "مريم",
    "طه",
    "الأنبياء",
    "الحج",
    "المؤمنون",
    "النور",
    "الفرقان",
    "الشعراء",
    "النمل",
    "القصص",
    "العنكبوت",
    "الروم",
    "لقمان",
    "السجدة",
    "الأحزاب",
    "سبأ",
    "فاطر",
    "يس",
    "الصافات",
    "ص",
    "الزمر",
    "غافر",
    "فصلت",
    "الشورى",
    "الزخرف",
    "الدخان",
    "الجاثية",
    "الأحقاف",
    "محمد",
    "الفتح",
    "الحجرات",
    "ق",
    "الذاريات",
    "الطور",
    "النجم",
    "القمر",
    "الرحمن",
    "الواقعة",
    "الحديد",
    "المجادلة",
    "الحشر",
    "الممتحنة",
    "الصف",
    "الجمعة",
    "المنافقون",
    "التغابن",
    "الطلاق",
    "التحريم",
    "الملك",
    "القلم",
    "الحاقة",
    "المعارج",
    "نوح",
    "الجن",
    "المزمل",
    "المدثر",
    "القيامة",
    "الإنسان",
    "المرسلات",
    "النبأ",
    "النازعات",
    "عبس",
    "التكوير",
    "الإنفطار",
    "المطففين",
    "الإنشقاق",
    "البروج",
    "الطارق",
    "الأعلى",
    "الغاشية",
    "الفجر",
    "البلد",
    "الشمس",
    "الليل",
    "الضحى",
    "الشرح",
    "التين",
    "العلق",
    "القدر",
    "البينة",
    "الزلزلة",
    "العاديات",
    "القارعة",
    "التكاثر",
    "العصر",
    "الهمزة",
    "الفيل",
    "قريش",
    "الماعون",
    "الكوثر",
    "الكافرون",
    "النصر",
    "المسد",
    "الإخلاص",
    "الفلق",
    "الناس",
  ];
//! Extract Some State from store 
  const { data, isLoading, isError } = useSelector((store) => store.surah);
// Calling the getSurrah(id) function and get surrah when change in randomsurrah(when click on button) 
// this function when calling in intial render and change in dependesis
  useEffect(() => {
    dispatch(getSurrah(randomSurrah));
  }, [dispatch, randomSurrah]);
  useEffect(()=>{
  // When data recive from api make a randomAyyah  and change of state of ayah and state of surrah that will passing as props to ayah t
  if (data ) {
    const randomAyyah = Math.floor(Math.random() * data.length);
    setSurrah(surahs[randomSurrah - 1]); 
    setAyah(data[randomAyyah]);
  }
  },[data])
// if not recived yet please display Loading component
  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center min-h-[50vh]">
        <Loader />
      </div>
    );
  }
  return (
    <main className="container flex justify-center items-center gap-4 w-full h-full">
      <article className="border-main border p-8 rounded-lg flex flex-col gap-8">
        <button
          onClick={() => setRandomSurrah(Math.floor(Math.random() * 114) + 1)} // Trigger new Surrah
          className="gbtn p-4 rounded-full overflow-hidden text-white px-12 tracking-wide self-center"
        >
          فهمني آية
        </button>
            {/* Display aya when fetched data is fulfuild */}
            {!isError ? <Ayah surrah={surrah} ayah={ayah} />:
                // When Erron form fetched data from api please display fixed aya
                 <div className=" space-y-2"> 
                 <div className="ayah flex  gap-4 text-xl items-center">
                      <span className="text-lg font-semibold uppercase">الاية</span>
                      <p className="bg-gray-200 p-4 rounded-md flex-grow flex justify-between items-center">
                         <p> رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ وَعَلَّمْتَنِي مِن تَأْوِيلِ الْأَحَادِيثِ ۚ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ أَنتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ ۖ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ <span className='bg-gray-200 rounded-full mr-2 border-main border w-[25px]  h-[25px] mt-2 text-main font-bold  inline-flex justify-center items-center text-sm '>101</span></p>
                        < span className='bg-gray-300 px-2 py-1 rounded-md text-main'>{surrah} </span>
                      </p>
                    </div>
                    <div className="tafser flex gap-4 items-center">
                      <span className="text-lg font-semibold uppercase">تفسير</span>
                      <p className="bg-gray-200 p-4 rounded-md flex-grow font-rubic text-lg">
                          <span>م دعا يوسف ربه قائلا ربِّ قد أعطيتني من ملك "مصر"، وعلَّمتني من تفسير الرؤى وغير ذلك من العلم، يا خالق السموات والأرض ومبدعهما، أنت متولي جميع شأني في الدنيا والآخرة، توفني إليك مسلمًا، وألحقني بعبادك الصالحين من الأنبياء الأبرار والأصفياء الأخيار</span>
                      </p>
                    </div>
                 </div>
              }
      </article>
    </main>
  );
}
