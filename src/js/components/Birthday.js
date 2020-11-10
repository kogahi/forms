import React from "react";

export default class Birthday extends React.Component {
    render(){
      const years = [
        {value: "-", label:'-'}
      ];
      for(let i=1990; i<2021; i++){
            years[i-1989].value = i,
            years[i-1989].label =  i
          };

      const months = [
        {value: '-', label: '-'},
        {value: '1', label: '1'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
        {value: '4', label: '4'},
        {value: '5', label: '5'},
        {value: '6', label: '6'},
        {value: '7', label: '7'},
        {value: '8', label: '8'},
        {value: '9', label: '9'},
        {value: '10', label: '10'},
        {value: '11', label: '11'},
        {value: '12', label: '12'},
      ];
      const days = [
        {value: '-', label: '-'},
        {value: '1', label: '1'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
        {value: '4', label: '4'},
        {value: '5', label: '5'},
        {value: '6', label: '6'},
        {value: '7', label: '7'},
        {value: '8', label: '8'},
        {value: '9', label: '9'},
        {value: '10', label: '10'},
        {value: '11', label: '11'},
        {value: '12', label: '12'},
        {value: '13', label: '13'},
        {value: '14', label: '14'},
        {value: '15', label: '15'},
        {value: '16', label: '16'},
        {value: '17', label: '17'},
        {value: '18', label: '18'},
        {value: '19', label: '19'},
        {value: '20', label: '20'},
        {value: '21', label: '21'},
        {value: '22', label: '22'},
        {value: '23', label: '23'},
        {value: '24', label: '24'},
        {value: '25', label: '25'},
        {value: '26', label: '26'},
        {value: '27', label: '27'},
        {value: '28', label: '28'},
        {value: '29', label: '29'},
        {value: '30', label: '30'},
        {value: '31', label: '31'},
      ]
    
      // const selectYear = years.map( (year) => 
      //  <option value={year.value}>{year.label}</option>
      // );
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
                      {/* {selectYear} */}
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