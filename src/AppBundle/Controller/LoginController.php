<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller {
    /**
     * @Route("/")
     */
    public function showAction(){
        /*$templating = $this->container->get('templating');
        $html = $templating->render('login/show.html.twig');
        return new Response($html);*/

        return $this->render('login/show.html.twig');
        //return new Response('Under the sea...');
    }
}
