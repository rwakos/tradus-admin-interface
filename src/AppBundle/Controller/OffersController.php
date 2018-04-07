<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class OffersController extends Controller{
    /**
     * @Route("/offers", name="offers")
     */
    function showAction(){
        return $this->render('offers/show.html.twig');
    }

    /**
     * @Route("/offers/create", name="offers-create")
     * @param $auth
     * @return \Symfony\Component\HttpFoundation\Response
     *
     */

    function createAction(AuthenticationUtils $auth){
        $errors = $auth->getLastAuthenticationError();
        return $this->render('offers/create.html.twig', [
            'errors' => $errors
        ]);
    }

    /**
     * @Route("/offers/edit", name="offers-edit")
     */
    function editAction(){
        return $this->render('offers/edit.html.twig');
    }
}