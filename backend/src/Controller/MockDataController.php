<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class MockDataController extends AbstractController
{
    #[Route('/mock/data', name: 'app_mock_data')]
    public function index(): JsonResponse
    {
        $filePath = $this->getParameter(('kernel.project_dir')) . '/public/data/project.json';

        if (!file_exists($filePath)) {
            return new Jsonresponse(['error' => 'Mock data file not found']);
        }

        $jsonData = file_get_contents($filePath);
        $data = json_decode($jsonData, true);


        return new JsonResponse($data);
    }
}
