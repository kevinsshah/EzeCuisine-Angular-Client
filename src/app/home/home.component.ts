import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  slides = [
    {
      imageSrc: 'http://www.hhdenver.com/data1/images/fullhdwallpaperfood65.jpg',
      mainHeading: 'OUR RECIPES',
      subHeading: 'Tried, tested, tasted and reviewed by the best of critics and our thousands of customers and chefs'
    },
    {
      imageSrc: 'https://dmkz2i5qfmsty.cloudfront.net/aa7c2b48-6a24-4cf1-81de-682a0ed78ed3.jpg',
      mainHeading: 'OUR SERVICE',
      subHeading: 'The best on east coast, and it\'s absolutely free throughout your lifetime!'
    },
    {
      imageSrc: 'http://www.gettwistedmeals.com/photos/IMG-0569.jpg?autorotate=true&mode=crop&scale=both&quality=50&width=1600&height=700',
      mainHeading: 'OUR VARIETY',
      subHeading: 'We bring to you thousands of recipes with a plethora of eze cuisines'
    }
  ];

  dishes = [
    {
      id: 'Revolutionary-Mac-_-Cheese-1048867',
      recipeName: 'Revolutionary Mac & Cheese',
      sourceDisplayName: 'Big Rigs \'n Lil\' Cookies',
      imageUrl: 'http://lh3.googleusercontent.com/XR_Pm7z37o_bE9mjfTKGkKSyMuJHWRRLq' +
      '7jexRbjkk5pnmUzCkwTOuARgft1TTxI3JCdYUyLNBGZwvqdgtuQP8Y=s360-c'
    },
    {
      id: 'Best-grilled-cheese-sandwich-306791',
      recipeName: 'Best Grilled Cheese Sandwich',
      sourceDisplayName: 'Food Republic',
      imageUrl: 'http://lh3.ggpht.com/KZCBiEhOYtTLDz3-urPorlrhQMGuu4pJ31oMQXUmORJIYllSGhnFXXIvCeMlaCpq1UTOdtMwdP1BP_VOqhgJtg=s360-c'
    },
    {
      id: 'Avocado-and-Tomato-Salad-1061964',
      recipeName: 'Avocado and Tomato Salad',
      sourceDisplayName: 'Taste and Tell',
      imageUrl: 'http://lh3.googleusercontent.com/fC5VcKmgheN2epMpFtR85brGrFr3FumbgJQ8CNrlN_ANjmst0btB1NJPclurVOF-' +
        '5j7Getd8QovOIjAYiwdHHQ=s360-c'
    },
    {
      id: 'Easy-cheesy-bacon-biscuit-pull-aparts-334779',
      recipeName: 'Easy Cheesy Bacon Biscuit Pull-Aparts',
      sourceDisplayName: 'Picky Palate',
      imageUrl: 'http://lh4.ggpht.com/TJySdPQVBQe38zfrTh-rN_XEie18YC2IgsSY9UpD52Vuo-5kqTpmLnaz2K2YZFDX2xszMiv4Lc4prvnJf2kK=s360-c'
    },
    {
      id: 'Roasted-spicy-cauliflower-309859',
      recipeName: 'Roasted Spicy Cauliflower',
      sourceDisplayName: 'Kalyn\'s Kitchen',
      imageUrl: 'https://lh3.googleusercontent.com/8mNMyLOwL5kJzbXvCtJDX_H9PZszjdZKdUpkbXhoBBiMioEf-ND_' +
        '40BDBn2BHnpaqtJMFEOPrqvS6-tVF0weBQ=s360-c'
    },
    {
      id: 'Rasgulla-752927',
      recipeName: 'Rasgulla',
      sourceDisplayName: 'Kevin\'s favorite dish :D',
      imageUrl: 'http://lh3.ggpht.com/5cDuQGUzeFRQJJ4ZAhwMDE2Krs-wivGyl8kkK1ILqopKfgdcyQK4ZGF0lRUWK2wTJS2i9QcEbMsY2IgTM-Gs=s360-c'
    },
    {
      id: 'Apple-Cake-With-Maple-Cream-Cheese-Frosting-493666',
      recipeName: 'Apple Cake With Maple Cream Cheese Frosting',
      sourceDisplayName: 'Drizzle & Dip',
      imageUrl: 'http://lh4.ggpht.com/cyzl_KQKPxnlXcimM8horNCLcQovN4co6zbMd5-sVccomp_nmd_-uzjrtCF2AxEGIvt5Y7eHZFtRNC7P5rvv=s360-c'
    },
    {
      id: 'Shakin_-hash-browns-310017',
      recipeName: 'Shakin’ Hash Browns',
      sourceDisplayName: 'Big Girls Small Kitchen',
      imageUrl: 'http://lh3.ggpht.com/eY-U2KONhxH3pCNavZEpCuospKoQcJb0QK-4Sq7rWuwZ5R-N5nqan1nLA5F4NlFeUJncfMScme82TgMrLndUo7o=s360-c'
    },
    {
      id: 'Marinated-Roasted-Red-Pepper-Grilled-Cheese-Sandwich-Closet-Cooking-54954',
      recipeName: 'Marinated Roasted Red Pepper Grilled Cheese Sandwich',
      sourceDisplayName: 'Closet Cooking',
      imageUrl: 'http://lh6.ggpht.com/PnxznOgYcGMI0njmBoGa7_OM3tOU0mJQjRnutgrl14spzGP1KczViYAWi4kvob12hlb5clFRwKsnx_Ayd2kazQ=s360-c'
    },
    {
      id: 'Parmesan-encrusted-zucchini-309802',
      recipeName: 'Parmesan Encrusted Zucchini',
      sourceDisplayName: 'Kalyn\'s Kitchen',
      imageUrl: 'https://lh3.googleusercontent.com/vWLcNHjFjj-bVQ4DVgeFwBGE7ncg7BFu7K71wGxQV8P70PA8LbTowsJcw4Hdfr243Q-' +
        'QrKV01MQzwu2wDNY_cA=s360-c'
    },
    {
      id: 'Black-Bean-and-Guac-Burritos-Naturally-Ella-46521',
      recipeName: 'Black Bean and Guac Burritos',
      sourceDisplayName: 'Naturally Ella',
      imageUrl: 'http://lh5.ggpht.com/eD5LvlxK8hTrJWUZp1wVu4CnokanN09Heus8cGQNfIVOwqDQEpUyd0IleoGqhUraJsTvxc5W7aTlTmc8eryPsA=s360-c'
    },
    {
      id: 'Southern-Cornbread-Dressing-2167839',
      recipeName: 'Southern Cornbread Dressing',
      sourceDisplayName: 'Add a Pinch',
      imageUrl: 'https://lh3.googleusercontent.com/_oXGu8NjCk4mBrLO74AQoszgNxclaR9eVP4JSbsLAIp50GgHI0LIBKmun5NtXJOsVcQ4s' +
        '_SnnqZtWwwzek3I=s360-c'
    },
    {
      id: 'Summer-corn-salad-299562',
      recipeName: 'Summer Corn Salad',
      sourceDisplayName: 'Unilever North America',
      imageUrl: 'http://lh3.ggpht.com/63P8VOBkJ3Y_XAL_G-sfFXqzw7YSOcS6mfHjH0ZvIn6XwP02vJRb12Huvlt-I7MrfSTmtcB9dNsZ1c3kEagZf4s=s360-c'
    },
    {
      id: 'Home-fries-307082',
      recipeName: 'Home Fries',
      sourceDisplayName: 'Smitten Kitchen',
      imageUrl: 'http://lh3.ggpht.com/pU_f7ia8QLGT-N6p5Y1NSvGFRmYQyUlm1HptVggUPy64u7GRFiz115ANEKmBL5-aThTqPO3Tec8LKHzaunD0=s360-c'
    },
    {
      id: 'Basic-Baked-French-Fries-1198588',
      recipeName: 'Basic Baked French Fries',
      sourceDisplayName: 'Food Republic',
      imageUrl: 'http://lh3.googleusercontent.com/JPU8dJMH6WApaZxGj2ksA1nTE7mWL_8fX_KAagYw0dOR28S5BSPjMmUhBsT7v4Rv' +
        '_hRULiRsMmviquQkIm3c1w=s360-c'
    }
  ];

  navigate(yummlyId, recipeName) {
    this.router.navigate(['search/' + recipeName + '/' + yummlyId]);
  }

  ngOnInit() {
  }

}
