import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NgxValue {
  name: string,
  series: NgxValueSerie[]
}

export interface NgxValueSerie {
  name: string,
  value: any
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: NgxValue[] = [
    {
      "name": "Burkina Faso",
      "series": [
        {
          "name": "1990",
          "value": 19892
        },
        {
          "name": "2000",
          "value": 55352
        },
        {
          "name": "2010",
          "value": 59771
        }
      ]
    },
    {
      "name": "Brazil",
      "series": [
        {
          "name": "1990",
          "value": 44655
        },
        {
          "name": "2000",
          "value": 41337
        },
        {
          "name": "2010",
          "value": 17345
        }
      ]
    },
    {
      "name": "Slovenia",
      "series": [
        {
          "name": "1990",
          "value": 13922
        },
        {
          "name": "2000",
          "value": 32093
        },
        {
          "name": "2010",
          "value": 52122
        }
      ]
    },
    {
      "name": "Burkina Faso1",
      "series": [
        {
          "name": "1990",
          "value": 19892
        },
        {
          "name": "2000",
          "value": 55352
        },
        {
          "name": "2010",
          "value": 59771
        }
      ]
    },
    {
      "name": "Brazil1",
      "series": [
        {
          "name": "1990",
          "value": 44655
        },
        {
          "name": "2000",
          "value": 41337
        },
        {
          "name": "2010",
          "value": 17345
        }
      ]
    },
    {
      "name": "Slovenia1",
      "series": [
        {
          "name": "1990",
          "value": 13922
        },
        {
          "name": "2000",
          "value": 32093
        },
        {
          "name": "2010",
          "value": 52122
        }
      ]
    },

  ]
  computeVertData: NgxValue[] = [
    {
      "name": "brazil",
      "series": [
        {
          "name": "1990",
          "value": 19892
        },]
    },
    {
      "name": "brazil1",
      "series": [
        {
          "name": "1990",
          "value": 20892
        },]
    },
    {
      "name": "brazil2",
      "series": [
        {
          "name": "1990",
          "value": 19392
        },]
    },
    {
      "name": "brazil3",
      "series": [
        {
          "name": "1990",
          "value": 13892
        },]
    },
    {
      "name": "brazil1",
      "series": [
        {
          "name": "1990",
          "value": 19892
        },]
    },
    {
      "name": "brazil11",
      "series": [
        {
          "name": "1990",
          "value": 20892
        },]
    },
    {
      "name": "brazil12",
      "series": [
        {
          "name": "1990",
          "value": 19392
        },]
    },
    {
      "name": "brazil1311",
      "series": [
        {
          "name": "1990",
          "value": 13892
        },]
    },
    {
      "name": "brazil1",
      "series": [
        {
          "name": "1990",
          "value": 19892
        },]
    },
    {
      "name": "brazil11",
      "series": [
        {
          "name": "1990",
          "value": 20892
        },]
    },
    {
      "name": "brazil21",
      "series": [
        {
          "name": "1990",
          "value": 19392
        },]
    },
    {
      "name": "brazil31",
      "series": [
        {
          "name": "1990",
          "value": 13892
        },]
    },
    {
      "name": "brazil11",
      "series": [
        {
          "name": "1990",
          "value": 19892
        },]
    },
    {
      "name": "brazil111",
      "series": [
        {
          "name": "1990",
          "value": 20892
        },]
    },
    {
      "name": "brazil121",
      "series": [
        {
          "name": "1990",
          "value": 19392
        },]
    },
    {
      "name": "brazil131",
      "series": [
        {
          "name": "1990",
          "value": 13892
        },]
    },
    {
      "name": "brazil",
      "series": [
        {
          "name": "1990",
          "value": 19892
        },]
    },
    {
      "name": "brazil1",
      "series": [
        {
          "name": "1990",
          "value": 20892
        },]
    },
    {
      "name": "brazil2",
      "series": [
        {
          "name": "1990",
          "value": 19392
        },]
    },
    {
      "name": "abrazil3",
      "series": [
        {
          "name": "1990",
          "value": 13892
        },]
    },
    {
      "name": "abrazil1",
      "series": [
        {
          "name": "1990",
          "value": 19892
        },]
    },
    {
      "name": "abrazil11",
      "series": [
        {
          "name": "1990",
          "value": 20892
        },]
    },
    {
      "name": "abrazil12",
      "series": [
        {
          "name": "1990",
          "value": 19392
        },]
    },
    {
      "name": "abrazil1311",
      "series": [
        {
          "name": "1990",
          "value": 13892
        },]
    },
    {
      "name": "abrazil1",
      "series": [
        {
          "name": "1990",
          "value": 19892
        },]
    },
    {
      "name": "abrazil11",
      "series": [
        {
          "name": "1990",
          "value": 20892
        },]
    },
    {
      "name": "abrazil21",
      "series": [
        {
          "name": "1990",
          "value": 19392
        },]
    },
    {
      "name": "abrazil31",
      "series": [
        {
          "name": "1990",
          "value": 13892
        },]
    },
    {
      "name": "abrazil11",
      "series": [
        {
          "name": "1990",
          "value": 19892
        },]
    },
    {
      "name": "abrazil111",
      "series": [
        {
          "name": "1990",
          "value": 20892
        },]
    },
    {
      "name": "abrazil121",
      "series": [
        {
          "name": "1990",
          "value": 19392
        },]
    },
    {
      "name": "abrazil131",
      "series": [
        {
          "name": "1990",
          "value": 13892
        },]
    },
    {
      "name": "brazil100",
      "series": [
        {
          "name": "1990",
          "value": 14592
        },]
    }
  ]

  desktopVertData: NgxValue[] = [
    {
      "name": "brazil",
      "series": [
        {
          "name": "1990",
          "value": 198892
        },]
    },
    {
      "name": "brazil1",
      "series": [
        {
          "name": "1990",
          "value": 230892
        },]
    },
    {
      "name": "brazil2",
      "series": [
        {
          "name": "1990",
          "value": 193692
        },]
    },
    {
      "name": "brazil3",
      "series": [
        {
          "name": "1990",
          "value": 135892
        },]
    },
    {
      "name": "brazil1",
      "series": [
        {
          "name": "1990",
          "value": 198926
        },]
    },
    {
      "name": "brazil11",
      "series": [
        {
          "name": "1990",
          "value": 208492
        },]
    },
    {
      "name": "brazil12",
      "series": [
        {
          "name": "1990",
          "value": 193392
        },]
    },
    {
      "name": "brazil1311",
      "series": [
        {
          "name": "1990",
          "value": 113892
        },]
    },
    {
      "name": "brazil1",
      "series": [
        {
          "name": "1990",
          "value": 198921
        },]
    },
    {
      "name": "brazil11",
      "series": [
        {
          "name": "1990",
          "value": 208923
        },]
    },
    {
      "name": "brazil21",
      "series": [
        {
          "name": "1990",
          "value": 193392
        },]
    },
    {
      "name": "brazil31",
      "series": [
        {
          "name": "1990",
          "value": 138924
        },]
    },
    {
      "name": "brazil11",
      "series": [
        {
          "name": "1990",
          "value": 198492
        },]
    },
    {
      "name": "brazil111",
      "series": [
        {
          "name": "1990",
          "value": 208192
        },]
    },
    {
      "name": "brazil121",
      "series": [
        {
          "name": "1990",
          "value": 119392
        },]
    },
    {
      "name": "brazil131",
      "series": [
        {
          "name": "1990",
          "value": 213892
        },]
    },
    {
      "name": "brazil",
      "series": [
        {
          "name": "1990",
          "value": 719892
        },]
    },
    {
      "name": "abrazil3",
      "series": [
        {
          "name": "1990",
          "value": 513892
        },]
    },
    {
      "name": "abrazil12",
      "series": [
        {
          "name": "1990",
          "value": 193392
        },]
    },
    {
      "name": "abrazil1311",
      "series": [
        {
          "name": "1990",
          "value": 138923
        },]
    },
    {
      "name": "abrazil1",
      "series": [
        {
          "name": "1990",
          "value": 193892
        },]
    },
    {
      "name": "abrazil11",
      "series": [
        {
          "name": "1990",
          "value": 208923
        },]
    },
    {
      "name": "abrazil21",
      "series": [
        {
          "name": "1990",
          "value": 193923
        },]
    },
    {
      "name": "abrazil31",
      "series": [
        {
          "name": "1990",
          "value": 813892
        },]
    },
    {
      "name": "abrazil11",
      "series": [
        {
          "name": "1990",
          "value": 319892
        },]
    },
    {
      "name": "abrazil111",
      "series": [
        {
          "name": "1990",
          "value": 320892
        },]
    },
    {
      "name": "abrazil121",
      "series": [
        {
          "name": "1990",
          "value": 419392
        },]
    },
    {
      "name": "abrazil131",
      "series": [
        {
          "name": "1990",
          "value": 413892
        },]
    },
    {
      "name": "brazil100",
      "series": [
        {
          "name": "1990",
          "value": 414592
        },]
    }
  ]

  

  constructor() {
  }

  GetData(): BehaviorSubject<NgxValue[]> {
    return new BehaviorSubject<NgxValue[]>(this.data);
  }

  GetDataComputeVert(): BehaviorSubject<NgxValue[]> {
    return new BehaviorSubject<NgxValue[]>(this.computeVertData);
  }
  GetDataComputeHoriz(): BehaviorSubject<NgxValue[]> {
    return new BehaviorSubject<NgxValue[]>([{
      "name": "Burkina Faso",
      "series": [
        {
          "name": "1990",
          "value": 19892
        },
      ]
    }]);
  }

  GetDataDesktopVert(): BehaviorSubject<NgxValue[]> {
    return new BehaviorSubject<NgxValue[]>(this.desktopVertData);
  }
  GetDataDesktopHoriz(): BehaviorSubject<NgxValue[]> {
    return new BehaviorSubject<NgxValue[]>([{
      "name": "Burkina Faso",
      "series": [
        {
          "name": "1990",
          "value": 1
        },
      ]
    }]);
  }
}
