import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
// Auth
import AuthLayout from './layout/AuthLayout.jsx';
import MainLayout from './layout/MainLayout.jsx';
import ForgotPasword from './pages/auth/ForgotPasword.jsx';
import SignIn from './pages/auth/SignIn.jsx';
import SignUp from './pages/auth/SignUp.jsx';
import SuccesPassword from './pages/auth/SuccesPassword.jsx';
// User
import Explore from './pages/Explore.jsx';
import MyProfile from './pages/myprofile/MyProfile.jsx';
import ProfileComunities from './pages/myprofile/ProfileComunities.jsx';
import ProfileEvents from './pages/myprofile/ProfileEvents.jsx';
import ProfileSaved from './pages/myprofile/ProfileSaved.jsx';
// Events
import EventsLayout from './layout/EventsLayout.jsx';
import DetailEvent from './pages/events/DetailEvent.jsx';
import Events from './pages/events/Events.jsx';
// import CommunitiesLayout from './layout/CommunitiesLayout.jsx';
// import DashboarLayout from './layout/DashboarLayout.jsx';
// import NotificationLayout from './layout/NotificationLayout.jsx';
// import CommunitieDetail from './pages/communities/CommunitieDetail.jsx';
// import DiscussionCommunities from './pages/communities/DiscussionCommunities.jsx';
// import EventsCommunities from './pages/communities/EventsCommunities.jsx';
// import MembersCommunities from './pages/communities/MembersCommunities.jsx';
// import AdminDashboar from './pages/dashboard/admin/AdminDashboar.jsx';
// import CommunitiesDashboardAdmin from './pages/dashboard/admin/CommunitiesDashboardAdmin.jsx';
// import EventsDasboardAdmin from './pages/dashboard/admin/EventsDasboardAdmin.jsx';
// import OverviewDasboardAdmin from './pages/dashboard/admin/OverviewDasboardAdmin.jsx';
// import UsersDashbooardAdmin from './pages/dashboard/admin/UsersDashbooardAdmin.jsx';
// import Create1 from './pages/dashboard/organizer/Create1.jsx';
// import Create2 from './pages/dashboard/organizer/Create2.jsx';
// import Create3 from './pages/dashboard/organizer/Create3.jsx';
// import CreateEvents from './pages/dashboard/organizer/CreateEvents.jsx';
// import OrganizerDashboard from './pages/dashboard/organizer/OrganizerDashboard.jsx';
// import SuccessCreateEvent from './pages/dashboard/organizer/SuccessCreateEvent.jsx';
// import MyEvents from './pages/myevents/MyEvents.jsx';
// import Past from './pages/myevents/Past.jsx';
// import Saved from './pages/myevents/Saved.jsx';
// import Upcomming from './pages/myevents/Upcomming.jsx';
// import AllNotifications from './pages/notification/AllNotifications.jsx';
// import UnreadNotifications from './pages/notification/UnreadNotifications.jsx';

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Explore />,
      },
      // {
      //   path: 'not-found',
      //   element: <NotFound />,
      // },
      //     {
      //       path: 'communities',
      //       children: [
      //         {
      //           index: true,
      //           element: <CommunitiesLayout />,
      //         },
      //         {
      //           path: ':id',
      //           element: <CommunitieDetail />,
      //           children: [
      //             {
      //               index: true,
      //               element: (
      //                 <Navigate
      //                   to="events"
      //                   replace
      //                 />
      //               ),
      //             },
      //             {
      //               path: 'members',
      //               element: <MembersCommunities />,
      //             },
      //             {
      //               path: 'events',
      //               element: <EventsCommunities />,
      //             },
      //             {
      //               path: 'discussion',
      //               element: <DiscussionCommunities />,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      {
        path: 'events',
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <Events />,
          },
          {
            path: ':id',
            element: <DetailEvent />,
          },
        ],
      },
      //     {
      //       path: 'myevents',
      //       element: <MyEvents />,
      //       children: [
      //         {
      //           index: true,
      //           element: (
      //             <Navigate
      //               to=":id"
      //               replace
      //             />
      //           ),
      //         },
      //         {
      //           path: ':id',
      //           children: [
      //             {
      //               index: true,
      //               element: (
      //                 <Navigate
      //                   to="upcoming"
      //                   replace
      //                 />
      //               ),
      //             },
      //             {
      //               path: 'upcoming',
      //               element: <Upcomming />,
      //             },
      //             {
      //               path: 'past',
      //               element: <Past />,
      //             },
      //             {
      //               path: 'saved',
      //               element: <Saved />,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       path: 'event',
      //       element: <CreateEvents />,
      //       children: [
      //         {
      //           path: '1',
      //           element: <Create1 />,
      //         },
      //         {
      //           path: '2',
      //           element: <Create2 />,
      //         },
      //         {
      //           path: '3',
      //           element: <Create3 />,
      //         },
      //         {
      //           path: 'success',
      //           element: <SuccessCreateEvent />,
      //         },
      //       ],
      //     },
      {
        path: 'profile',
        element: <MyProfile />,
        children: [
          {
            index: true,
            element: (
              <Navigate
                to="events"
                replace
              />
            ),
          },
          {
            path: 'events',
            element: <ProfileEvents />,
          },
          {
            path: 'communities',
            element: <ProfileComunities />,
          },
          {
            path: 'saved',
            element: <ProfileSaved />,
          },
        ],
      },
      //     {
      //       path: 'dashboard',
      //       element: <DashboarLayout />,
      //       children: [
      //         {
      //           path: 'admin/:id',
      //           element: <AdminDashboar />,
      //           children: [
      //             {
      //               index: true,
      //               element: (
      //                 <Navigate
      //                   to="overview"
      //                   replace
      //                 />
      //               ),
      //             },
      //             {
      //               path: 'overview',
      //               element: <OverviewDasboardAdmin />,
      //             },
      //             {
      //               path: 'users',
      //               element: <UsersDashbooardAdmin />,
      //             },
      //             {
      //               path: 'events',
      //               element: <EventsDasboardAdmin />,
      //             },
      //             {
      //               path: 'communities',
      //               element: <CommunitiesDashboardAdmin />,
      //             },
      //           ],
      //         },
      //         {
      //           path: 'organizer/:id',
      //           element: <OrganizerDashboard />,
      //         },
      //       ],
      //     },
      //     {
      //       path: 'notifications/:id',
      //       element: <NotificationLayout />,
      //       children: [
      //         {
      //           path: 'all',
      //           element: <AllNotifications />,
      //         },
      //         {
      //           path: 'unread',
      //           element: <UnreadNotifications />,
      //         },
      //       ],
      //     },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to="signin"
            replace
          />
        ),
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'password',
        element: <ForgotPasword />,
      },
      {
        path: 'success',
        element: <SuccesPassword />,
      },
    ],
  },
  // {
  //   path: '*',
  //   element: (
  //     <Navigate
  //       to="/not-found"
  //       replace
  //     />
  //   ),
  // },
  {
    path: '*',
    element: (
      <Navigate
        to="/auth/signin"
        replace
      />
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
