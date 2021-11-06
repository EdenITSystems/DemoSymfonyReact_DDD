<?php


namespace App\Controller\Pages;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class HomeController
 * @author jaures kano <ruddyjaures@gmail.com>
 * @package App\Controller\Pages
 */
class HomeController extends AbstractController
{
    /**
     * @Route("/", name="index_home")
     */
    public function index(): Response
    {
        return $this->render('pages/home/home.html.twig');
    }

}