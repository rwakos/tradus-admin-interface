<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class OffersController extends Controller{


    /**
     * @Route("/offers", name="offers")
     */
    function showAction(){
        return $this->render('offers/show.html.twig');
    }
}