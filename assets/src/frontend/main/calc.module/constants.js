const Constants = {
	Milli_In_Sec: 1000,
	Sec_In_Min: 60,
	Min_In_Hour: 60,
	Hour_In_Day: 24,
	Day_In_Month: 30,
	Year_In_Day: 365,
	Kb_In_Bytes: 1024,
};

Constants.Min_In_Sec   = Constants.Sec_In_Min * Constants.Milli_In_Sec;
Constants.Hour_In_Sec  = Constants.Min_In_Hour * Constants.Min_In_Sec;
Constants.Day_In_Sec   = Constants.Hour_In_Day * Constants.Hour_In_Sec;
Constants.Month_In_Sec = Constants.Day_In_Month * Constants.Day_In_Sec;
Constants.Year_In_Sec  = Constants.Year_In_Day * Constants.Day_In_Sec;
Constants.Mb_In_Bytes  = Constants.Kb_In_Bytes * 1024;
Constants.Gb_In_Bytes  = Constants.Mb_In_Bytes * 1024;
Constants.Tb_In_Bytes  = Constants.Gb_In_Bytes * 1024;

export default Constants;