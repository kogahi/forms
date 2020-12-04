import React from "react";

export default class Birthday extends React.Component {
    render(){
      const years = [
        {value: '-', label: '-'}
      ];
      for(let i = 1990; i < 2021; i++){
        const value = '';
        const label = '';
        years.push({
          value: i,
          label: i
        })
      };
      const months = [
        {value: '-', label: '-'}
      ];
      for(let i = 1; i < 13; i++){
        const value = '';
        const label = '';
        months.push({
          value: i,
          label: i
        })
      };
      const days = [
       {value: '-', label: '-'}
      ];
      for(let i = 1; i < 32; i++){
        const value = '';
        const label = '';
        days.push({
          value: i,
          label: i
        })
      };
      const selectYear = years.map((year) => 
       <option value={year.value}>{year.label}</option>
      );
      const selectMonth = months.map((month) => 
       <option value={month.value}>{month.label}</option>
      );
      const selectDay = days.map((day) => 
       <option value={day.value}>{day.label}</option>
      );
      return(
          <div class="birthday">
            <div>
                <span>-生年月日-</span>
            </div>
            <div className="select">
              <form>
                  <select class="birthday-year" name="year">
                    {selectYear}
                  </select>　年
                  <select class="birthday-month" name="month">
                    {selectMonth}
                  </select>　月
                  <select class="birthday-day" name="day">
                    {selectDay}
                  </select>　日
              </form>
        　  </div>
      　  </div>
      );
    }
}