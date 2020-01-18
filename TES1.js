function Profile(biodata)
{
    let bio =
    {
        "name": biodata,
        "age":23,
        "address": "JL. Peltu Sujono Gg.Anggrek 32, RT.09 RW.02, CIPTOMULYO, SUKUN, MALANG 65148 JAWA TIMUR",
        "hobbies": 
        [
            "Game",
            "Programming",
            "Anime",
            "Sleep"
        ],
        "is_married":false,
        "list_school":
        [
            {
                "name"      :"SDN CIPTOMULYO 1 MALANG",
                "year_in"   :2003,
                "year_out"  :2009,
                "major"     :null
            },
            {
                "name"      :"SMPN 19 MALANG",
                "year_in"   :2009,
                "year_out"  :2011,
                "major"     :null
            },
            {
                "name"      :"SMPI MA'ARIF MALANG",
                "year_in"   :2011,
                "year_out"  :2012,
                "major"     :null
            },
            {
                "name"      :"SMK NASIONAL MALANG",
                "year_in"   :2012,
                "year_out"  :2015,
                "major"     :"RPL"
            },
            {
                "name"      :"STIKI MALANG",
                "year_in"   :2015,
                "year_out"  :null,
                "major"     :"SI TEKNIK INFORMATIKA"
            }
        ],
        "skills":
        [
            {
                "skill_name"    :"JS",
                "level"         :"intermediate"
            },
            {
                "skill_name"    :"JAVA",
                "level"         :"intermediate"
            },
            {
                "skill_name"    :"MYSQL",
                "level"         :"intermediate"
            },
            {
                "skill_name"    :"PHP",
                "level"         :"intermediate"
            },
            {
                "skill_name"    :"HTML",
                "level"         :"intermediate"
            },
            {
                "skill_name"    :"PYTHON",
                "level"         :"beginner"
            },
        ],
        "interest_in_coding": true
    }

    return bio;
}

console.log(Profile("ARBI DWI WIJAYA"));