import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurrah } from "../../Redux/Surrah";
import Loader from "../../compnents/Loader/Loader";
import Ayah from "../../compnents/Ayah/Ayah";

export default function Choose() {
  const dispacth = useDispatch();
  // The name of surrah that change when you change the option in datalist
  const [surrah, setSurrah] = useState('اختر السوره');
  const [change, setChange] = useState(false);
  // Extract some State form Store
  const {data,isLoading, isError} = useSelector((store)=>{
    return  store.surah
  })
  // Select  input that i will write surrah there
  const spSurah = useRef()
  // Array of Surah names in Arabic
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
  // Get surrah That i written in input and put in getSurrah(id) the call it to change the state and i can take data
  async function chooseSurah(){
    // Return the number of surrah by take the value in input and passing to function geSurrah to give data then change surrah state to display in component
    const numSurrah = surahs.indexOf(spSurah.current.value) + 1;
    setChange(true)
    dispacth(getSurrah(numSurrah));
    setSurrah(surahs[numSurrah - 1])
  }
  
  return (
    <section className="choose container relative">
      {/* Input and button in choose page */}
      <div className=" flex justify-center gap-4 flex-col md:flex-row items-center">
        <div>
          <label
            htmlFor="surahInput "
            className="font-semibold text-2xl text-main ml-4"
          >
            اختر سورة:
          </label>
          <input
            ref={spSurah}
            list="surahDatalist"
            className="border border-main p-2 rounded-md focus:outline-none "
            id="surahInput"
            name="surah"
            placeholder="اسم السورة"
          />
          <datalist id="surahDatalist"  >
            {surahs.map((surah, index) => (
              <option
                key={index}
                value={surah}
                
              />
            ))}
          </datalist>
        </div>
        <button  className="gbtn px-8 text-white py-2 text-lg rounded-md" onClick={()=>chooseSurah()}>
          
          اختر
        </button>
      </div>
      {/* Header that take the name of surrah to choose it */}
      <h1 className="text-center  py-2 xt-2xl shadow-sm sticky z-40 bg-white right-0 left-0 top-[80px] mt-4 shadow-main font-bold">{surrah}</h1>
      {/* Display all Ayat from surrah you choose it */}
        <div className="mt-10">
          {isLoading  ? <div className="w-full flex items-center justify-center min-h-[50vh]">
                          <Loader></Loader>
                    </div>:<div className="space-y-12">
                   { change?data.map((ayah)=>{
                      return <Ayah ayah={ayah} surrah={surrah}/>
                     
                    }):""}
                    </div>
          }
        </div>
    </section>
  );
}
