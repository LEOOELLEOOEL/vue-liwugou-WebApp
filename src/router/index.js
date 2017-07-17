import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home/home';
import billboard from '@/components/billboard/billboard';
import category from '@/components/category/category';
import me from '@/components/me/me';
import choice from '@/components/home/subComponents/choice';
import girlfriend from '@/components/home/subComponents/girlfriend';
import boyfriend from '@/components/home/subComponents/boyfriend';
import elder from '@/components/home/subComponents/elder';
import recommend from '@/components/billboard/subComponents/recommend';
import top100 from '@/components/billboard/subComponents/top100';
import original from '@/components/billboard/subComponents/original';
import strategy from '@/components/category/subComponents/strategy';
import singleproduct from '@/components/category/subComponents/singleproduct';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/',
          redirect: 'choice'
        },
        {
          path: 'choice',
          component: choice
        },
        {
          path: 'girlfriend',
          component: girlfriend
        },
        {
          path: 'boyfriend',
          component: boyfriend
        },
        {
          path: 'elder',
          component: elder
        }
      ]
    },
    {
      path: '/billboard',
      component: billboard,
      children: [
        {
          path: '/',
          redirect: 'recommend'
        },
        {
          path: 'recommend',
          component: recommend
        },
        {
          path: 'top100',
          component: top100
        },
        {
          path: 'original',
          component: original
        }
      ]

    },
    {
      path: '/category',
      component: category,
      children: [
        {
          path: '/',
          redirect: 'strategy'
        },
        {
          path: 'strategy',
          component: strategy
        },
        {
          path: 'singleproduct',
          component: singleproduct
        }
      ]
    },
    {
      path: '/me',
      component: me
    }
  ]
});
