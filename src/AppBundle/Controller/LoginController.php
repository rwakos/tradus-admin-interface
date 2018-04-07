<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends Controller {


     /**
     * @Route("/login", name="login")
     * @param $request
     * @param $auth
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showAction(Request $request, AuthenticationUtils $auth){
        $errors = $auth->getLastAuthenticationError();
        $lastUserName = $auth->getLastUsername();

        if (!empty($errors)){
            $this->addFlash("success", "This is a success message");
        }

        return $this->render('login/show.html.twig', [
            'errors' => $errors,
            'email'  => $lastUserName,
        ]);
    }

    /**
     * @Route("/logout")
     */

    public function logout(){
        throw new \RuntimeException('Not Allowed');
    }
}
