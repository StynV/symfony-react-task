<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

/**
 * MockDataController
 * 
 * This controller provides an endpoint to fetches data from a file.
 */
class MockDataController extends AbstractController
{
    /**
     * @Route("/mock-data", name="app_mock_data", methods={"GET"})
     * 
     * Parameters: None
     * Responses: 
     * - 200 OK: File exists, so we return the content as JSON.
     * - 404 Not Found: File doesn't exist, so we return an error.
     */
    #[Route('/mock-data', name: 'app_mock_data')]
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
