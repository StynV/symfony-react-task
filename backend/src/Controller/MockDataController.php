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
        // Retrieve file
        $filePath = $this->getParameter(('kernel.project_dir')) . '/public/data/project.json';

        if (!file_exists($filePath)) {
            // Throw error in case the file doesn't exist
            return new Jsonresponse(['error' => 'Mock data file not found']);
        }

        // Read and decode file
        $jsonData = file_get_contents($filePath);
        $data = json_decode($jsonData, true);

        // Return JSON
        return new JsonResponse($data);
    }
}
